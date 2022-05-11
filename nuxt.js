import { join } from 'path';


let componets = [
  './src/structure/',
  './src/ui/basic/',
  './src/ui/layouts/'
]

export default function() {
    this.nuxt.hook('components:dirs', dirs => {
      componets.forEach(path => {
        dirs.push({
          path: join(__dirname, path),
          prefix: ''
        })
      })
    });
}