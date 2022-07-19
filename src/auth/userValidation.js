const validarEmail = (email) => {
  const re = /\S+@\S+\.\S+/;
  return re.test(email);
};

const createUserValidation = (name, email, password) => {
  if (!name || name === ' ') return { errors: ['Campo nome não pode ficar vazio'] };
  if (!email || email === ' ') return { errors: ['Campo Email não pode ficar vazio'] };
  if (!validarEmail(email)) return { errors: ['Email inválido'] };
  if (!password || password === ' ') return { errors: ['Campo Senha não pode ficar vazio'] };
  if (password.length < 6) return { errors: ['Campo Senha deve ter pelo menos seis caracteres'] };
  return { success: 'ook' };
};

module.exports = { createUserValidation };
