import TemplateIntroduction from './TemplateIntroduction.vue'

import { Meta, Story } from '@storybook/vue3'

export default {
  title: 'Components/TemplateIntroduction',
  component: TemplateIntroduction,
  argTypes: {
    msg: {
      control: {
        type: 'string'
      }
    }
  }
} as Meta

const Template: Story = (args) => ({
  components: { TemplateIntroduction },
  setup () {
    return { args }
  },
  template: '<template-introduction v-bind="args" />'
})

export const Example = Template.bind({})
Example.args = {
  msg: '⚡️ A simple and compact vue 3 template with current cutting edge front end technologies.'
}
