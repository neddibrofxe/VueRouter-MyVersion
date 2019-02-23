<template>
	<div>
		<h1>Data Siswa</h1>
		<table width=100%>
			<tr>
				<th>No</th>
				<th>NIS</th>
				<th>Nama</th>
				<th>Kelas</th>
			</tr>
			<tr>
				<td>1</td>
				<td>1617116768</td>
				<td>Wahyu Wahyudin</td>
				<td>XII RPL 3</td>
			</tr>
			<tr>
				<td>2</td>
				<td>1718116768</td>
				<td>neddibroF</td>
				<td>XII RPL 3</td>
			</tr>
			<tr>
				<td>3</td>
				<td>1819116768</td>
				<td>retsaM</td>
				<td>XII RPL 3</td>
			</tr>
		</table>
		<div id="app">
    		<router-link to="/formsiswa">Form Siswa</router-link>
    		<router-view/>
  		</div>
	</div>
</template>

<script>
	export default {
		
	}
</script>