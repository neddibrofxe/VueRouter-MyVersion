import Vue from 'vue'
import Router from 'vue-router'
import Siswa from '@/components/Siswa'
import Kelas from '@/components/Kelas'
import FormSiswa from '@/components/FormSiswa'
import FormKelas from '@/components/FormKelas'

Vue.use(Router)

export default new Router ({
	routes: [
	{
		path: '/siswa',
		name: 'Siswa',
		component: Siswa
	},
	{
		path: '/kelas',
		name: 'Kelas',
		component: Kelas
	},
	{
		path: '/formsiswa',
		name: 'FormSiswa',
		component: FormSiswa
	},
	{
		path: '/formkelas',
		name: 'FormKelas',
		component: FormKelas
	}]
})