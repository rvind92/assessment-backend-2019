const { User, Incident } = require('./models')

async function seedUsers() {
  await User.deleteMany({});
  await Incident.deleteMany({})

  const user1 = new User({
    name: 'John Doe',
    email: 'john.doe@example.com',
    role: 'Engineer'
  });

  const user2 = new User({
    name: 'Jane Doe',
    email: 'jane.doe@example.com',
    role: 'Supervisor'
  });

  const user3 = new User({
    name: 'James Done',
    email: 'james.done@example.com',
    role: 'Supervisor'
  });

  const incident1 = new Incident({
    title: 'Explosion',
    description: 'There was an explosion at Chernobyl Reactor 4',
    assignee: 'john.doe@example.com',
    status: 'Created'
  })

  const incident2 = new Incident({
    title: 'Meltdown',
    description: 'There was an Meltdown at Chernobyl Reactor 5',
    assignee: 'jane.doe@example.com',
    status: 'Acknowledged'
  })

  const incident3 = new Incident({
    title: 'Flood',
    description: 'There was a flood at the underground canal',
    assignee: 'james.done@example.com',
    status: 'Resolved'
  })

  await user1.save();
  await user2.save();
  await user3.save()
  // setTimeout(async () => await incident1.save(), 2000)
  // setTimeout(async () => await incident2.save(), 4000)
  // setTimeout(async () => await incident3.save(), 6000)
  await incident1.save()
  await incident2.save()
  await incident3.save()

  console.log('INFO: User DB seeded')
}

module.exports = {
  seedUsers
}
