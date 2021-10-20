import { useEffect, useState } from "react";
import { useParams } from "react-router";
import CardDetails from "../CardDetails/CardDetails";

const Details = () => {
  const { serviceId } = useParams();
  const data = [
    {
      id: "R01",
      name: "COVID-19 Center",
      img: "https://media-eng.dhakatribune.com/uploads/2020/04/bigstock-nurse-holding-a-positive-blood-354115904-1585913325241.jpg",
      details:
        "Gavi Alliance is co-leading global efforts on equitable access to COVID-19 vaccines. Gavi supports COVID-19 response and maintains and restores routine immunisation. Trusted information. Fact-based content",
    },
    {
      id: "R02",
      name: "Diabetes Center",
      img: "https://kevsbest.com/wp-content/uploads/2019/07/Best-Endocrinologists-in-Dallas.jpg",
      details:
        "he world's largest diabetes research center, diabetes clinic, and provider of diabetes education. It is located in the Longwood Medical and Academic Area in Boston, Massachusetts, United States. Among the Harvard Medical School affiliated institutions, Joslin is unique in its sole focus on diabetes",
    },
    {
      id: "R03",
      name: "Dental Center",
      img: "https://media.istockphoto.com/photos/man-having-teeth-examined-at-dentists-picture-id1271195625?b=1&k=20&m=1271195625&s=170667a&w=0&h=7TECk2ztWuB6O-_OjBY5VDmJ6T50PZdYRJ1cXDUf54s=",
      details:
        "Dentistry, also known as dental medicine and oral medicine, is a branch of medicine that consists of the study, diagnosis, prevention, and treatment of diseases, disorders, and conditions of the oral cavity (the mouth), commonly in the dentition (development and arrangement of teeth) as well as the oral mucosa, and of adjacent and related structures and tissues, particularly in associated maxillofacial (jaw and facial) area.",
    },
    {
      id: "R04",
      name: "Pain and Physiotherapy Center",
      img: "https://media.istockphoto.com/photos/african-american-doctor-wearing-protective-face-mask-during-an-with-picture-id1270585289?k=20&m=1270585289&s=612x612&w=0&h=f6aAS_t_ImTtiyNYGbLBEExofvNQp1eJh0DOsjlp8Hk=",
      details:
        "Physical therapy (PT), also known as physiotherapy, is one of the allied health professions.[1][2][3][4] It is provided by physical therapists who promote, maintain, or restore health through physical examination, diagnosis, prognosis, patient education, physical intervention, rehabilitation, disease prevention and health promotion. Physical therapists are known as physiotherapists in many countries.",
    },
    {
      id: "R05",
      name: "Diagnostic Services Center",
      img: "https://images.unsplash.com/photo-1604693031195-83553a02b9e8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEzfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
      details:
        "Medical diagnosis (abbreviated Dx,[1] Dx, or Ds) is the process of determining which disease or condition explains a person's symptoms and signs. It is most often referred to as diagnosis with the medical context being implicit. The information required for diagnosis is typically collected from a history and physical examination of the person seeking medical care.",
    },
    {
      id: "R06",
      name: "Children care Center",
      img: "https://images.unsplash.com/photo-1632053001332-2268cc09f738?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      details:
        "Child care, otherwise known as day care, is the care and supervision of a child or multiple children at a time, whose ages range from two weeks to eighteen years. Child care is a broad topic that covers a wide spectrum of professionals, institutions, contexts, activities, and social and cultural conventions.",
    },
  ];

  const details = data.filter((service) => service.id === serviceId);
  return (
    <div>
      <CardDetails card={details}></CardDetails>
    </div>
  );
};

export default Details;
