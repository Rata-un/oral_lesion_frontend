const LesionDetailsPage = async({ params }) => {
    const { id } = await params;
    console.log(id);
  return (
    <div>LesionDetailsPage</div>
  )
}
export default LesionDetailsPage