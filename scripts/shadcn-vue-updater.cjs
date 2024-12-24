const fs = require('fs')
const path = require('path')
const { exec } = require('child_process')

const directoryPath = path.join(__dirname, '../components/ui')

fs.readdir(directoryPath, (err, components) => {
  if (err) {
    return console.log('Unable to scan directory: ' + err)
  }

  const updateComponent = (index) => {
    if (index >= components.length) {
      console.log('All components updated')
      return
    }

    const component = components[index]
    console.log(`Updating component ${component}`)
    // FIXME: unknown command 'update'
    exec(`npx shadcn-vue update ${component}`, (error, stdout, stderr) => {
      if (error) {
        console.error(`Error updating component ${component}: ${error.message}`)
        return
      }
      if (stderr) {
        console.error(`Error output for component ${component}: ${stderr}`)
        return
      }
      console.log(`Successfully updated component ${component}: ${stdout}`)
      updateComponent(index + 1)
    })
  }

  updateComponent(0)
})
