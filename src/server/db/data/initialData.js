export const taskTypes = [
  {
    name: 'task'
  },
  {
    name: 'bug'
  }
]

export const tags = [
  {
    name: 'preliminary'
  },
  {
    name: 'mid-project'
  },
  {
    name: 'final'
  }
]

export const epics = [
  {
    name: 'Drivers Equipment Development',
    start: new Date('2021-1-10').getTime(),
    end: new Date('2021-02-11').getTime()
  },
  {
    name: 'Maps & Navigation Development',
    start: new Date('2021-02-12').getTime(),
    end: new Date('2021-03-14').getTime()
  },
  {
    name: 'Purchase Order Development',
    start: new Date('2021-03-08').getTime(),
    end: new Date('2021-04-09').getTime()
  }
]

export const kanbans = [
  {
    name: 'initiation'
  },
  {
    name: 'execution'
  },
  {
    name: 'closure'
  }
]

export const users = [
  {
    name: 'Hewitt McGowan',
    team: 'Delivery'
  },
  {
    name: 'Ed Grylls ',
    team: 'Delivery'
  },
  {
    name: 'Mandy Cheung',
    team: 'Headquarters'
  },
  {
    name: 'Jane Wang',
    team: 'Service Gateway'
  }
]

export const projects = [
  {
    name: 'Drivers Management System',
    teamLeadId: 1,
    team: 'Delivery',
    created: 1604989757139
  },
  {
    name: 'Group-buying System',
    teamLeadId: 2,
    team: 'Group Buying',
    created: 1604989757139,
    pin: true
  },
  {
    name: 'Equipment Management System',
    teamLeadId: 2,
    team: 'Equipment',
    created: 1546300800000
  },
  {
    name: 'Headquarters Management',
    teamLeadId: 3,
    team: 'Headquarters',
    created: 1604980000011
  },
  {
    name: 'Route Planning System',
    teamLeadId: 4,
    team: 'Delivery',
    created: 1546900800000
  }
]

export const tasks = [
  {
    name: 'Drivers Registration Development',
    tags: [1, 2],
    reporterId: 1,
    processorId: 2,
    epicId: 1,
    kanbanId: 1,
    favorite: true,
    typeId: 1,
    notes: 'Complete the task ASAP'
  },
  {
    name: 'Drivers Authentication Development',
    tags: [2],
    reporterId: 1,
    processorId: 2,
    epicId: 1,
    kanbanId: 1,
    favorite: true,
    typeId: 1,
    notes: 'With JWT'
  },
  {
    name: 'Unit Tests',
    tags: [1],
    reporterId: 1,
    processorId: 2,
    epicId: 1,
    kanbanId: 1,
    favorite: true,
    typeId: 1,
    notes: ''
  },
  {
    name: 'Optimisation',
    tags: [1],
    reporterId: 1,
    processorId: 2,
    epicId: 1,
    kanbanId: 1,
    favorite: true,
    typeId: 1,
    notes: ''
  },
  {
    name: 'Authorisation',
    tags: [1],
    reporterId: 1,
    processorId: 2,
    epicId: 1,
    kanbanId: 1,
    favorite: true,
    typeId: 1,
    notes: ''
  },
  {
    name: 'UI Development',
    tags: [1],
    reporterId: 1,
    processorId: 2,
    epicId: 1,
    kanbanId: 1,
    favorite: true,
    typeId: 1,
    notes: ''
  },
  {
    name: 'Self Testing',
    tags: [1],
    reporterId: 1,
    processorId: 2,
    epicId: 1,
    kanbanId: 1,
    favorite: true,
    typeId: 1,
    notes: ''
  }
]
