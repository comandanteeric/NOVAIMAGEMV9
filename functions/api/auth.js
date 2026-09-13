import { signToken, json } from './_shared.js';

export async function onRequestPost({ request, env }) {
  try {
    const body = await request.json();
    const username = String(body.username || '').trim().toUpperCase();
    const passwordHash = String(body.passwordHash || '').trim();

    if (!username || !passwordHash) {
      return json({ error: 'Informe usuário e senha.' }, 400);
    }

    const user = await env.DB
      .prepare(`
        SELECT id, usuario, nome, nivel, ativo
        FROM usuarios
        WHERE UPPER(usuario) = ?
          AND senha = ?
          AND ativo = 1
        LIMIT 1
      `)
      .bind(username, passwordHash)
      .first();

    if (!user) {
      return json({ error: 'Usuário ou senha inválidos.' }, 401);
    }

    const sessionUser = {
      username: user.usuario,
      name: user.nome || user.usuario,
      role: user.nivel === 'vendas' ? 'sales' : user.nivel
    };

    const token = await signToken(env, sessionUser);

    return json({
      token,
      username: sessionUser.username,
      name: sessionUser.name,
      role: sessionUser.role
    });

  } catch (error) {
    return json({ error: 'Falha ao autenticar.' }, 400);
  }
}

export function onRequest() {
  return json({ error: 'Método não permitido.' }, 405);
}
