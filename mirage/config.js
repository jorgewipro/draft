export default function() {
  this.namespace = '/api';

  let players = [{
        type: 'players',
        id: 'd410a9dd-6785-42b2-9283-7a628888a1f3',
        attributes: {
          firstname: 'Consuelo',
          lastname: 'Borer',
          age: 39,
          position: 'SF',
          averagepositionagediff: 8,
          namebrief: 'Consuelo Borer',
          league: 'NHL'
        }
      }, {
        type: 'players',
        id: '84c0bb8e-b58e-4266-85fb-90eccadb0230',
        attributes: {
          firstname: 'Lela',
          lastname: 'Krajcik',
          age: 22,
          position: 'S',
          averagepositionagediff: 0,
          namebrief: 'Lela Krajcik',
          league: 'NHL'
        }
      }, {
        type: 'players',
        id: '33c8e680-50f1-4fc5-b339-f588ba7505f2',
        attributes: {
          firstname: 'Haven',
          lastname: 'Sawayn',
          age: 24,
          position: 'SF',
          averagepositionagediff: -7,
          namebrief: 'Haven Sawayn',
          league: 'NHL'
        }
      }, {
        type: 'players',
        id: 'c13fd87b-b0cc-4940-9f5c-0165a8c7b94f',
        attributes: {
          firstname: 'Courtney',
          lastname: 'Pfannerstill',
          age: 34,
          position: 'G',
          averagepositionagediff: 0,
          namebrief: 'C. Pfannerstill',
          league: 'NFL'
        }
      }, {
        type: 'players',
        id: 'b391f8d1-f371-450e-be1e-de6d9e1c587f',
        attributes: {
          firstname: 'Anya',
          lastname: 'Wehner',
          age: 33,
          position: 'RW',
          averagepositionagediff: 0,
          namebrief: 'A. Wehner',
          league: 'NFL'
        }
      }, {
        type: 'players',
        id: '61f9ee3a-d69d-4317-941a-77bb7926c2ff',
        attributes: {
          firstname: 'Hulda',
          lastname: 'Rau',
          age: 37,
          position: 'SF',
          averagepositionagediff: 0,
          namebrief: 'H. Rau',
          league: 'NFL'
        }
      }, {
        type: 'players',
        id: 'ca9b9676-34e9-4d39-a03d-3512b77b68b9',
        attributes: {
          firstname: 'Alberto',
          lastname: 'Farrell',
          age: 20,
          position: 'TE',
          averagepositionagediff: 0,
          namebrief: 'Alberto F.',
          league: 'NBA'
        }
      }, {
        type: 'players',
        id: '7a259873-4589-4800-a8dd-4e648ea3e174',
        attributes: {
          firstname: 'Alphonso',
          lastname: 'Kuvalis',
          age: 20,
          position: 'DL',
          averagepositionagediff: 0,
          namebrief: 'Alphonso K.',
          league: 'NBA'
        }
      }, {
        type: 'players',
        id: '381e29ad-a77f-492c-99da-4b52dbb24118',
        attributes: {
          firstname: 'Anya',
          lastname: 'Lubowitz',
          age: 23,
          position: 'C',
          averagepositionagediff: 0,
          namebrief: 'Anya L.',
          league: 'NBA'
        }
      }, {
        type: 'players',
        id: '8e0777f5-de37-4bc7-8da5-5c9edc8e2a75',
        attributes: {
          firstname: 'Isabelle',
          lastname: 'Glover',
          age: 36,
          position: 'CB',
          averagepositionagediff: 0,
          namebrief: 'I. G.',
          league: 'MLB'
        }
      }, {
        type: 'players',
        id: '2e65e097-5a08-45e9-a5ed-b71c8d2e25b7',
        attributes: {
          firstname: 'Claudine',
          lastname: 'Cartwright',
          age: 36,
          position: 'SF',
          averagepositionagediff: 0,
          namebrief: 'C. C.',
          league: 'MLB'
        }
      }, {
        type: 'players',
        id: 'e7d1ee06-81e4-4a33-96b6-cbe0fc87cf45',
        attributes: {
          firstname: 'Dana',
          lastname: 'Lehner',
          age: 30,
          position: 'C',
          averagepositionagediff: 0,
          namebrief: 'D. L.',
          league: 'MLB'
        }
      }];

  this.get('/players', function(db, request) {
    if(request.queryParams.firstname !== undefined) {
      let filteredPlayers = players.filter(function(i) {
        return i.attributes.firstname.toLowerCase().indexOf(request.queryParams.firstname.toLowerCase()) !== -1;
      });
      return { data: filteredPlayers };
    } else {
      return { data: players };
    }
  });
  this.get('/players/:id', function (db, request) {
    return { data: players.find((player) => request.params.id === player.id) };
  });
}

  // These comments are here to help you get started. Feel free to delete them.

  /*
    Config (with defaults).

    Note: these only affect routes defined *after* them!
  */

  // this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
  // this.namespace = '';    // make this `/api`, for example, if your API is namespaced
  // this.timing = 400;      // delay for each request, automatically set to 0 during testing

  /*
    Shorthand cheatsheet:

    this.get('/posts');
    this.post('/posts');
    this.get('/posts/:id');
    this.put('/posts/:id'); // or this.patch
    this.del('/posts/:id');

    http://www.ember-cli-mirage.com/docs/v0.3.x/shorthands/
  */
