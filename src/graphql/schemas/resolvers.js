const { Incident, User } = require('../../models/index')

const resolvers = {
  Query: {
    incidents: async () => {
      const incidents = await Incident.find({}).sort({ updatedAt: 'desc' })

      return incidents
    },
    incident: async (_, { title }) => {
      const incident = await Incident.findOne({ title })

      return incident
    },
    users: async () => {
      const users = await User.find({})

      return users
    },
    user: async (_, { email }) => {
      const user = await User.findOne({ email })

      return user
    }
  },
  Mutation: {
    createIncident: async (_, { title, description, assignee }) => {
      const incident = new Incident({ title, description, assignee, status: 'Created' })
      const create = await incident.save()

      return create
    },
    acknowledgeIncident: async (_, { _id }) => {
      const incident = { status: 'Acknowledged' }
      const acknowledge = await Incident.findOneAndUpdate({ _id }, { $set: { ...incident } }, { new: true })

      return acknowledge
    },
    assignIncident: async (_, { _id, assignee }) => {
      const incident = { assignee }
      const assign = await Incident.findOneAndUpdate({ _id }, { $set: { ...incident } }, { new: true })

      return assign
    },
    resolveIncident: async (_, { _id }) => {
      const incident = { status: 'Resolved' }
      const resolve = await Incident.findOneAndUpdate({ _id }, { $set: { ...incident } }, { new: true })

      return resolve
    },
    deleteIncident: async (_, { _id }) => {
      const deleted = await Incident.deleteOne({ _id })

      return { _id }
    }
  }
}

module.exports = resolvers
