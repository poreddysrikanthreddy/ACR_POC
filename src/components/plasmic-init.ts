import { HelloWorld } from './components/HelloWorld';
// ...

export const PLASMIC = initPlasmicLoader(/* ... */);

PLASMIC.registerComponent(HelloWorld, {
  name: 'HelloWorld',
  props: {
    verbose: 'boolean',
    children: 'slot'
  }
});