<template>
	<div>
		<h1>Form Siswa</h1>
		<form>
			<table width=100%>
				<tr>
					<td>Nis</td>
					<td><input type='text'></td>
				</tr>
				<tr>
					<td>Nama</td>
					<td><input type='text'></td>
				</tr>
				<tr>
					<td>Kelas</td>
					<td><input type='text'></td>
				</tr>
				<tr>
					<td></td>
					<td><button type='submit'>Simpan</button></td>
				</tr>

			</table>
		</form>
		<div id="app">
    		<router-link to="/siswa">Data Siswa</router-link>
    		<router-view/>
  		</div>
	</div>
</template>

<script>
	export default {
		
	}
</script>