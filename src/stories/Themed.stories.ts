import { Story, Meta } from '@storybook/vue3'
import ThemedExample from './ThemedExample.vue'

/**
 * https://www.youtube.com/watch?v=MAtaT8BZEAo&ab_channel=TailwindLabs
 * https://play.tailwindcss.com/YelhilBeHb
 */
export default {
  title: 'Components'
} as Meta

export const Themed: Story = (args) => ({
  components: {
    ThemedExample
  },
  template: '<themed-example />'
})
