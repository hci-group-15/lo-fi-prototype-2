import {
    createRouter, createWebHistory
} from 'vue-router';

const router = createRouter( {
    'history': createWebHistory( import.meta.env.BASE_URL ),
    'routes': [
        {
            'path': '/',
            'name': 'home',
            'component': () => import( '@/views/HomeView.vue' ),
            'meta': {
                'title': 'Home'
            }
        },
        {
            'path': '/chat',
            'name': 'chat',
            'component': () => import( '@/views/ChatView.vue' ),
            'meta': {
                'title': 'Chat'
            }
        }
    ]
} );

router.afterEach( to => {
    window.scrollTo( {
        'top': 0,
        'behavior': 'smooth'
    } );
    document.title = to.meta.title ? to.meta.title + ' - Lo-Fi Prototype 2' : 'Lo-Fi Prototype 2';
} );

export default router;
