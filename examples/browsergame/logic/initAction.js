var fakeRequest = function (data, cb) {
  cb({
    playerId: 'FAKE123',
    location: 0,
    actions: [
      {
        name: 'chop',
        objects: ['tree'],
        items: [],
        npcs: [],
        bagitems: []
      },
      {
        name: 'collect',
        objects: [],
        items: ['stone', 'citymap'],
        npcs: [],
        bagitems: []
      },
      {
        name: 'talk',
        objects: [],
        items: [],
        npcs: ['merchant'],
        bagitems: []
      },
      {
        name: 'throw',
        objects: [],
        items: [],
        npcs: [],
        bagitems: ['stone']
      }
    ],
    locations: [
      {
        name: 'forrest',
        objects: [{
          name: 'tree'
        }],
        items: [{
            name: 'stone'
        },
          {
            name: 'citymap'
        }],
        npcs: [{
          name: 'merchant'
        }],
        connections: [
          {
            name: 'path to village',
            destination: 'village',
            requirements: {
              bagitems: {
                citymap: 1
              }
            }
          }
        ]
      },
      {
        name: 'village',
        objects: [],
        items: [],
        npcs: [{
          name: 'merchant'
        }]
      }
    ],
    bag: [{
      name: 'coin'
    }]
  });
};

initAction = new Joist.Logic({
  name: 'init',
  check: function (joist, signal, executed) {
    return (signal.target == 'game' && signal.data.value == 'init');
  },
  command: function (joist, signal, executed, cb) {
    fakeRequest(signal.data, function (result) {
      cb(result, []);
    });
  }
});
