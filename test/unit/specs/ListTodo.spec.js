import { createLocalVue, mount } from '@vue/test-utils'
import ListTodo from '@/components/ListTodo'
import Vuex from 'vuex'
import ElementUI from 'element-ui'

const localVue = createLocalVue()
localVue.use(Vuex)
localVue.use(ElementUI)

describe('ListTodo.vue', () => {
  let actions
  let store
  let getters
  let state
  let wrapper

  beforeEach(() => {
    state = {
      todos: []
    }
    actions = {
      getTodos: jest.fn(),
      addTodoItem: jest.fn(),
      deleteTodoItem: jest.fn(),
      updateTodoItem: jest.fn(),
      clearNewTodo: jest.fn()
    }
    getters = {
      todos: () => []
    }
    store = new Vuex.Store({
      state,
      actions,
      getters
    })

    wrapper = mount(ListTodo, {
      localVue,
      store
    })
  })

  test('renders a ListTodo vue instance', () => {
    expect(wrapper.isVueInstance()).toBe(true)
  })

  test('it Add todo button should be disabled if input is empty', () => {
    wrapper.newTodo = 'Create Vue.js project'
    const button = wrapper.find('button')
    expect(button.attributes().disabled).toBeTruthy()
  })

  test('it calls store action "addTodoItem" and "getTodos" when button is clicked', () => {
    const button = wrapper.find('button')
    button.element.disabled = false
    button.trigger('click')
    expect(actions.addTodoItem).toHaveBeenCalled()
    expect(actions.getTodos).toHaveBeenCalled()
})
})
