import fastify from 'fastify';
import z from 'zod';

import { PrismaClient } from '@prisma/client';

const app = fastify();

const prisma = new PrismaClient({
  log: ['query'],
});

app.post('/users', async (request, reply) => {
  const CriarUsuarioSchema = z.object({
    nome: z.string(),
    email: z.string().email(),
    senha: z.string(),
  });

  const data = CriarUsuarioSchema.parse(request.body);

  //vai executar um query no bando de dados
  const usuario = await prisma.users.create({
    data: {
      nome: data.nome,
      email: data.email,
      senha: data.senha,
    },
  });

  return reply.status(201).send({ usuario: usuario.id });
});

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log('Servidor rodando http://localhost:3333');
  });
