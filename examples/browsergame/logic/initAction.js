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
        items: ['stone', 'villagemap', 'gatekey'],
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
        }, {
          name: 'villagemap'
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
                villagemap: 1
              }
            }
          }
        ]
      },
      {
        name: 'village',
        objects: [],
        items: [{
          name: 'gatekey'
        }],
        npcs: [{
          name: 'merchant'
        }],
        connections: [
          {
            name: 'gate to the forrest',
            destination: 'forrest',
            requirements: {
              bagitems: {
                gatekey: 1
              }
            }
          }
        ]
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
