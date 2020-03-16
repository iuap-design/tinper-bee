const latestVersion = require('latest-version');
let components = require('./components.json');
const fs = require('fs-extra')

let length = Object.keys(components).length;

let getVersion = async (component) =>{
  let version = await latestVersion(component);
  console.log(component+' : '+version)
  components[component]=version;
  console.log('剩余: '+(--length)+' 个')
} 


Object.keys(components).forEach(async item=>{
  await getVersion(item);
  fs.writeJSONSync('./utils/comNew.json', components)
})