const education =
 [{
 period: "2022 — 2026",
degree: "Bachelor of Technology",
detail: "Computer Science & Engineering · Vasireddy Venkatadri Institute of Technology",
result: "CGPA 7.9"
 },
{
period: "2020 — 2022",
degree: "Higher Secondary Education", 
detail: "MPC · Bhashyam Junior College", result: "96.2%"
},
{
period: "2019 — 2020",
degree: "Secondary Education", 
detail: "SSC · Oxford Public School", 
result: "99%"
 }];
function Education()
{
return(
<section id="education" className="section education-section">
<div className="section-kicker">04 — Background</div>
<p className="eyebrow">Education</p>
<h2>A foundation for<br />what’s next.</h2>
<div className="timeline">
{
education.map((item) =>
     <div className="timeline-item" key={item.degree}>
        <span>{item.period}</span><div><h3>{item.degree}</h3>
        <p>{item.detail}</p>
        </div>
        <strong>{item.result}</strong>
        </div>)
        }
        </div>
        </section>
        );
}
export default Education;