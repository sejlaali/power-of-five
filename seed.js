const { User, Mood } = require ('./models');

async function seed() {
  const user = await User.create({
    name: 'Name',
    email: 'me@me.me',
    password_digest: 'hello',
  })

  const mood = await Mood.create({
    type:'this mood'
  })

  await mood.setUser(user)

  process.exit();
}

seed();
