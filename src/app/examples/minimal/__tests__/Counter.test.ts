import Counter from '../components/counter.vue'
import { mount, VueWrapper } from '@vue/test-utils'
import { useExampleStore } from '../stores/example'

describe('Example Counter', () => {
  let wrapper: VueWrapper
  let exampleStore: ReturnType<typeof useExampleStore>
  beforeEach(() => {
    setActivePinia(createPinia())
    wrapper = mount(Counter)
    exampleStore = useExampleStore()
  })

  it('should render currectly', () => {
    expect(wrapper.html()).toContain('0')
  })

  it('should increment', async () => {
    exampleStore.increase()
    await wrapper.find('[data-test="inc"]').trigger('click')
    expect(wrapper.get('[data-test="result"]').text()).toBe('4')
  })

  it('should decrement', async () => {
    exampleStore.decrease()
    await wrapper.find('[data-test="dec"]').trigger('click')
    expect(wrapper.get('[data-test="result"]').text()).toBe('4')
  })
})
