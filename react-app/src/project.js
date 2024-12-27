export default function project(props) {
    const { img, h2, pLink, p, lang1, lang2, lang3, lang4, lang5, lang6 } = props;
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
                        {lang1 && <img src={lang1} alt="Language 1" />}
                        {lang2 && <img src={lang2} alt="Language 2" />}
                        {lang3 && <img src={lang3} alt="Language 3" />}
                        {lang4 && <img src={lang4} alt="Language 4" />}
                        {lang5 && <img src={lang5} alt="Language 5" />}
                        {lang6 && <img src={lang6} alt="Language 6" />}
                    </span>


                </div>

            </div>

        </div>


    )
}