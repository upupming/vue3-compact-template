import TemplateIntroduction, { TemplateIntroductionProps } from './TemplateIntroduction.vue'
import { action } from '@storybook/addon-actions'
import { Meta, Story } from '@storybook/vue3'

export default {
  title: 'Components/TemplateIntroduction',
  component: TemplateIntroduction,
  argTypes: {
    msg: {
      // https://storybook.js.org/docs/react/essentials/controls#annotation
      control: {
        type: 'text'
      }
    }
  }
} as Meta<TemplateIntroductionProps>

const Template: Story<TemplateIntroductionProps> = (args) => ({
  components: { TemplateIntroduction },
  // https://github.com/storybookjs/storybook/discussions/11372#discussioncomment-32947
  methods: { update: action('update') },
  setup () {
    return { args }
  },
  template: '<template-introduction v-bind="args" @update="update" />'
})

export const Example = Template.bind({})
Example.args = {
  msg: '⚡️ A simple and compact vue 3 template with current cutting edge front end technologies.'
}
