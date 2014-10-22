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
        items: ['stone'],
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
        }],
        npcs: [{
          name: 'merchant'
        }]
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
