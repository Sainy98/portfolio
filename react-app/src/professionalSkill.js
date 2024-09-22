export default function skill() {

    return (
        <>
            <button className='btn'> Professional Skill</button>

            <div class="content" id="Skill">
                <div class="profile-skills">
                    <div>
                        <input type="checkbox" id="sk1" />
                        <label for="sk1"></label>
                        <ul class="skills skills1">
                            <li class="sk-html"><span>HTML</span></li>
                            <li class="sk-css"><span>CSS</span></li>
                            <li class="sk-js"><span>JAVASCRIPT</span></li>
                            <li class="sk-react"><span>REACT</span></li>
                            <li class="sk-express"><span>EXPRESS</span></li>
                            <li class="sk-node"><span>NODE JS</span></li>
                            <li class="sk-python"><span>PYTHON</span></li>
                            <li class="more">
                                <input type="checkbox" id="more-con" />
                                <label for="more-con"></label>
                                <div><span>MONGODB</span><span>SQL</span><span>API</span><span>BOOTSTRAPS</span><span>FLASK</span><span>AI</span></div>                            </li>
                        </ul>
                    </div>
                    <div>
                        <input type="checkbox" id="sk2" />
                        <label for="sk2"></label>
                        <ul class="skills skills2">
                            <li class="sk-vs"><span>VS CODE</span></li>
                            <li class="sk-github"><span>GITHUB</span></li>
                            <li class="sk-wordpress"><span>WORDPRESS</span></li>
                            <li class="sk-window"><span>WINDOW</span></li>
                            <li class="sk-kali"><span>KALI LINUX</span></li>
                            <li class="sk-ui"><span>UI/UX DESIGN</span></li>
                            <li class="sk-excel"><span>ADVANCE EXCEL</span></li>
                            <li class="more">
                                <input type="checkbox" id="more-pro" /><label for="more-pro"></label>
                                <div><span>RESPONSIVE WEB DESIGN</span><span>ETHICAL HACKING</span><span>COLOR THEORY</span><span>GIT</span><span>FIGMA</span><span>STILL LEARNING..🧑‍💻</span></div>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <input type="checkbox" id="sk3" />
                        <label for="sk3"></label>
                        <ul class="skills skills3">
                            <li class="sk-ps"><span>PROBLEM SOLVING</span></li>
                            <li class="sk-creative"><span>CREATIVE APPROACH</span></li>
                            <li class="sk-adap"><span>ADAPTABILITY</span></li>
                            <li class="sk-learning"><span>LEARNING HUNGER</span></li>
                            <li class="sk-time"><span>TIME MANAGEMENT</span></li>
                            <li class="sk-ethical"><span>ETHICAL MINSET</span></li>
                            <li class="sk-self"><span>SELF CONFIDENT</span></li>
                            <li class="more">
                                <input type="checkbox" id="more-len" /><label for="more-len" />
                                <div><span>CLIENT MANAGEMENT</span><span>TEAM WORK</span><span>GOOD COMMUNICATION</span><span>ATTENTION TO DETAIL</span><span>PRESENTATION SKILL</span></div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className='example'>

                <span>
                    👆this is a just a example
                </span>
                <br></br>
                <blockquote>
                    <p> I'm on a constant quest for knowledge, soaking up new skills and insights like a sponge in a sea of learning.
                    </p>
                    <cite>— Harsh</cite>
                </blockquote>




            </div>
        </>

    )
}