import Post from '../components/Assignment'
import store from '../store'

export default {
    components: {
        Post
    },

    template: require('./AssignmentList.html'),

    data () {
        return {
            id: '',
            title: '',
            content: '',
            createdAt: '',
            type: '',
            posts: []
        }
    },

    created () {
        store.reloadPosts(this, 'posts')
    },

    methods: {
        submit () {
            const data = {
                'type': 'post',
                'title': this.title,
                'content': this.content,
                'createdAt': new Date().toJSON()
            }
            store.create(data).then(results => {
                store.reloadPosts(this, 'posts')
            })
            this.title = ''
            this.content = ''
        }
    }
}
