
const DaemonFactory = require('ipfsd-ctl')

DaemonFactory
  .create({ type: 'go' })
  .spawn({ disposable: false }, (err, ipfsd) => {
    if (err) {
      throw err
    }

    ipfsd.init((_) => {
      ipfsd.start((_) => {
        ipfsd.api.id((_, id) => {
          if (err) {
            throw err
          }
          console.log('alice')
          console.log(id)
          ipfsd.stop()
        })
      })
    })
  })
