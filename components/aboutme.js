export default function AboutMe(props) {
  return (
    <div className="min-h-screen items-center">
      <h1 className="text-9xl ">Education</h1>
      <div style={styles.parallex}></div>

      <section className="my-20">
        <div className="  md:flex  justify-around ">
          <article>
            <h2 className="text-4xl">Degree</h2>
            <p>
              Bachelor degree in{" "}
              <span className="text-2xl p-2 hover:bg-yellow-600 hover:rounded-lg hover:text-white">
                Inforamtion Technology Engineering
              </span>
              <br />
              <span className="text-2xl">Artificial Intelligence</span>{" "}
              Department from Damascus University <br />
              Faculty of Information Technology Engineering
            </p>
          </article>
          <article>
            <h2 className="text-4xl">University</h2>
            <p className="text-white text-3xl">Damascus University</p>
          </article>
          <article>
            <h2 style={styles}>Graduation Year</h2>
            <p className="text-center">2014</p>
          </article>
        </div>
      </section>
    </div>
  );
}
const styles = {
  success: {
    color: "red",
  },
  parallex: {
    background: 'url("/images/university.jpg")',
    backgroundSize: "contain",
    backgroundPosition: "center",
    backgroundAttachment: "fixed",
    height: "20rem",
  },
};
