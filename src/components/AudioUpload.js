export default function AudioUpload({setter}) {
	return (
		<div>
		<input type='file' onChange={(e) => setter(URL.createObjectURL(e.target.files[0]))} />
		</div>
	)
}
