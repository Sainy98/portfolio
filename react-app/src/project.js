export default function project(props) {
    const { img, h2, pLink, p, lang1, lang2, lang3, lang4, lang5 } = props;
    return (
        <div className="ProjectContainer" id="Project">

            <div className='project'>
                <div className="project_img">
                    <img className="image" src={img} alt="project1" />
                    <button>
                        <a href={pLink}>Project Link</a>
                    </button>

                </div>

                <div className="project_desc">
                    <h2>{h2}</h2>
                    <p>{p}</p>
                    <span className="codingLanguage">
                        <span> {lang1}</span>
                        <span> {lang2}</span>
                        <span> {lang3}</span>
                        <span> {lang4}</span>
                        <span> {lang5}</span>
                    </span>

                </div>

            </div>

        </div>


    )
}