import "./Services.css"
import { Code2, Megaphone, Search, BarChart2 } from "lucide-react"

const services = [
 {
   icon: <Code2 size={32} />,
   title: "Web Development",
   description: "Building modern, responsive websites tailored to your business needs."
 },
 //{
   //icon: <Megaphone size={32} />,
   //title: "Paid Ad Management",
   //description: "Running targeted TikTok and Meta ad campaigns to help you reach the right audience."
 //},
 {
   icon: <Search size={32} />,
   title: "SEO Optimization",
   description: "Helping your website get found by the right people on search engines."
 },
 {
   icon: <BarChart2 size={32} />,
   title: "Website Analytics Setup",
   description: "Setting up GA4 so you can track who visits your site, where they come from, and what's working."
 }
]

function Services() {
 return (
   <section className="services" data-aos="fade-up" id="services">

     <h2>What I Offer</h2>
     <p>Services to help your business grow online</p>

     <div className="services-grid">
       {services.map((service, index) => (
         <div className="service-card" key={index}>
           <div className="service-icon">{service.icon}</div>
           <h3>{service.title}</h3>
           <p>{service.description}</p>
         </div>
       ))}
     </div>

   </section>
 )
}

export default Services