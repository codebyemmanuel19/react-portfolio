import "./Services.css"
import { Code2, Megaphone, Search, BarChart2 } from "lucide-react"

const services = [
  {
    icon: <Code2 size={32} />,
    title: "Website Development",
    description:
      "Building modern, responsive, and high-performing websites tailored to your business needs."
  },
  {
    icon: <Megaphone size={32} />,
    title: "Meta & TikTok Ads",
    description:
      "Creating and managing targeted Meta and TikTok advertising campaigns to help you reach the right audience."
  },
  {
    icon: <Search size={32} />,
    title: "SEO & Search Console",
    description:
      "Optimizing your website for search engines and setting up Google Search Console to monitor performance."
  },
  {
    icon: <BarChart2 size={32} />,
    title: "Analytics & Tracking",
    description:
      "Setting up Google Analytics 4 and Meta Pixel so you can measure traffic, user behavior, and marketing performance."
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