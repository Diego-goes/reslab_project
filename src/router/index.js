// // src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'; // Importe createRouter e createWebHistory
import LoginUser from '@/views/loginUser.vue';
import CadastroUser from '@/views/cadastroUser.vue';
import CadastroLab from '@/views/cadastroLab.vue';
import CadastroResLab from '@/views/cadastroResLab.vue';
import LoadPayment from '@/views/loadPayment.vue';
import SucessPayment from '@/views/sucessPayment.vue';
import ReservarLab from '@/views/reservarLab.vue';
import PagReservas from '@/views/pagReservas.vue';
import PagLabs from '@/views/pagLabs.vue';
import NotFound from '@/views/notFound.vue'

const routes = [
  {
    path: '/paglabs',
    name: 'pagLabs',
    component: PagLabs,
  },
  {
    path: '/cadastrouser',
    name: 'cadastroUser',
    component: CadastroUser,
  },
  {
    path: '/cadastrolab',
    name: 'cadastroLab',
    component: CadastroLab,
  },
  {
    path: '/cadastroreslab',
    name: 'cadastroResLab',
    component: CadastroResLab,
  },
  {
    path: '/reservarlab/:andar/:is_active/:lab/:description',
    name: 'reservarLab',
    component: ReservarLab,
  },
  {
    path: '/pagreservas',
    name: 'pagReservas',
    component: PagReservas,
  },
  {
    path: '/loadpayment',
    name: 'loadPayment',
    component: LoadPayment,
  },
  {
    path: '/sucesspayment',
    name: 'sucessPayment',
    component: SucessPayment,
  },
  {
    path: '/:catchAll(.*)', // Rota padrão para lidar com qualquer outra URL
    component: NotFound, // Substitua 'NotFound' pelo componente apropriado
  },
  {
    path: '/login',
    redirect: '/',
  },
  {
    path: '/',
    component: LoginUser,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;


