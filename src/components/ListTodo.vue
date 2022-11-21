 <template>
  <div class="container">
    <template>
          <template>
            <div class="inputContainer">
              <el-input v-model="newTodo" size="mini" @keyup.enter="addTodo">
              </el-input>
              <el-button type="primary" size="mini" @click="addItem" :disabled="newTodo.length === 0">Add</el-button>
            </div>
          </template>
          <template>
            <div v-for="todo in todos" :key="todo.id" class="listItem" v-if="todos.length">
            <span class="textContent"><span class="checkboxContainer"><el-checkbox :checked="todo.completed" @change="updateItemStatus(todo)"></el-checkbox></span>{{todo.title}}</span>
            <span class="deleteContainer" @click="deleteItem(todo)"><i class="el-icon-close"></i></span>
          </div>
          </template>
          <template v-if="todos.length ===0">
            <div class="listItem empty">No items</div>
          </template>
    </template>
  </div>
</template>

<script>
export default {
  name: 'ListTodo',
  data () {
    return {
      newTodo: ''
    }
  },

  created () {
    this.$store.dispatch('getTodos')
  },

  computed: {
    todos () {
      return this.$store.getters.todos
    }
  },

  methods: {
    addItem () {
      this.$store.dispatch('addTodoItem', this.newTodo)
      this.$store.dispatch('clearNewTodo')
      this.newTodo = ''
    },
    updateItemStatus (todo) {
      this.$store.dispatch('updateTodoItem', todo)
    },
    deleteItem (todo) {
      console.log('ddd', todo)
      this.$store.dispatch('deleteTodoItem', todo)
    }
  }
}
</script>

<style>
.container {height: 100%;width:1000px;margin:0 auto;}
.inputContainer{padding:20px 0;background:#fff;border:1px solid #afc4da;overflow: hidden;}
.el-input--mini{width:86%;float: left;margin-left:2%;}
.el-input--mini .el-input__inner{padding:20px;border:1px solid #afc4da}
.el-button--mini{padding:14px 25px;float: left;margin-left:2%}
.el-icon-close{color:#409eff;font-weight: bold;}
.listItem{padding:20px;background-color: #fff;border:1px solid #afc4da;border-top:0 none;text-align: left;position: relative;cursor: pointer;}
.listItem .textContent{white-space: nowrap;width: 95%;overflow: hidden;text-overflow: ellipsis;display: block;}
.listItem.empty{text-align: center;}
.listItem.empty:hover{background-color: #fff;}
.checkboxContainer{padding:0 20px}
.deleteContainer{position: absolute;right:40px;visibility: hidden;top:22px;}
.listItem:hover .deleteContainer{visibility: visible;}
.listItem:hover{background-color: #ecf2f7;}
</style>
