export type ProcedureSection = {
  heading: string;
  paragraphs: string[];
  link?: { href: string; label: string };
};

export type ProcedureFAQ = {
  question: string;
  answer: string;
};

export type ProcedureItem = {
  slug: string;
  title: string;
  description: string;
  /** Optional keyword-rich title for <title> and OG (e.g. "Hernia Surgeon London & Hertfordshire") */
  seoTitle?: string;
  /** Optional meta description with target keywords and location */
  seoDescription?: string;
  image: string;
  imageLeft: boolean;
  expandedContent: ProcedureSection[];
  /** Optional FAQs for FAQPage schema and on-page content */
  faqs?: ProcedureFAQ[];
};

export const procedures: ProcedureItem[] = [
  {
    slug: "advanced-upper-gastrointestinal-gi-surgery",
    title: "Advanced Upper Gastrointestinal (GI) Surgery",
    seoTitle: "Upper GI Surgeon London & Hertfordshire | Advanced Upper GI Surgery",
    seoDescription: "Mr Osama Moussa – Upper GI surgeon London and Hertfordshire. Expert in advanced Upper GI surgery, laparoscopic and robotic techniques. Treating GORD, hiatus hernia, gallbladder and hernia. Spire Bushey, Circle Health Group, West Herts NHS. Book a consultation.",
    description:
      "Specialising in Upper Gastrointestinal (GI) Surgery, Osama offers advanced surgical solutions to address a wide range of conditions affecting the upper digestive tract with precision and expertise. With a commitment to patient-centred care and the latest surgical techniques, he ensures that each procedure is tailored to meet the unique needs of the patient while promoting optimal outcomes and improved quality of life.",
    image: "/Advanced UGI surgery.jpg",
    imageLeft: true,
    expandedContent: [
      {
        heading: "What is Advanced Upper GI Surgery?",
        paragraphs: [
          "Advanced Upper Gastrointestinal (GI) surgery covers operations on the oesophagus, stomach, and the upper part of the small intestine. Mr Osama Moussa specialises in benign (non-cancer) conditions of this area, using both laparoscopic (keyhole) and robotic techniques to deliver precise, minimally invasive care.",
          "Conditions treated include acid reflux (GORD), hiatus hernias, achalasia, gallbladder disease, and hernias affecting the upper abdomen. Each treatment plan is tailored to the individual, with the aim of relieving symptoms, restoring function, and improving quality of life.",
        ],
      },
      {
        heading: "Why Choose Mr Moussa for Upper GI Surgery",
        paragraphs: [
          "Mr Moussa is trained in both Versius and Intuitive robotic platforms and has extensive experience in laparoscopic Upper GI surgery. He works at West Hertfordshire NHS Trust and at Spire Bushey and Circle Health Group hospitals, offering care across London and Hertfordshire.",
          "His practice is focused on patient-centred outcomes: shorter hospital stays, faster recovery, and lower risk of complications where minimally invasive surgery is appropriate. He is happy to discuss the best approach for your condition and to answer any questions before you decide on treatment.",
        ],
      },
      {
        heading: "What to Expect",
        paragraphs: [
          "After referral, you will have a consultation to discuss your symptoms, any previous tests, and the options available. If surgery is recommended, the procedure, benefits, and risks will be explained in detail. Follow-up and aftercare are arranged so you are supported throughout your recovery.",
        ],
      },
    ],
    faqs: [
      { question: "What does an Upper GI surgeon do?", answer: "An Upper GI surgeon specialises in operations on the oesophagus, stomach, and upper part of the small intestine. Mr Moussa focuses on benign (non-cancer) conditions including acid reflux (GORD), hiatus hernia, gallbladder disease, and hernias. He uses laparoscopic and robotic techniques for minimally invasive care." },
      { question: "Where can I see an Upper GI surgeon in London or Hertfordshire?", answer: "Mr Osama Moussa sees patients at Spire Bushey, Circle Health Group hospitals (Bishops Wood, The Wellington Hospital), and West Hertfordshire NHS Trust. Appointments can be made via the contact page or by phone." },
      { question: "What is the difference between laparoscopic and robotic Upper GI surgery?", answer: "Both are minimally invasive. Laparoscopic surgery uses a camera and instruments controlled directly by the surgeon. Robotic surgery uses a console where the surgeon controls instruments with enhanced precision and 3D vision. Mr Moussa is trained in both and will recommend the best approach for your condition." },
    ],
  },
  {
    slug: "laparoscopic-surgery",
    title: "Laparoscopic Surgery",
    seoTitle: "Laparoscopic Surgeon London & Hertfordshire | Keyhole Surgery",
    seoDescription: "Laparoscopic (keyhole) surgery in London and Hertfordshire with Mr Osama Moussa. Gallbladder, hernia repair, anti-reflux surgery. Minimally invasive, faster recovery. Also searched as key hole surgery. Spire Bushey, Circle Health Group, West Herts. Book a consultation.",
    description:
      "Osama utilises laparoscopic surgery to perform minimally invasive procedures on the upper gastrointestinal tract, including conditions such as hernias and gallbladder issues. With smaller incisions and advanced technology, laparoscopic surgery offers patients faster recovery times and reduced post-operative pain.",
    image: "/laparoscopic-surgery.jpeg",
    imageLeft: false,
    expandedContent: [
      {
        heading: "What is Laparoscopic (Keyhole) Surgery?",
        paragraphs: [
          "Laparoscopic surgery uses a camera and thin instruments passed through small incisions in the abdomen. The surgeon views the operation on a screen and performs the procedure without the need for a large open cut. This approach is used for many Upper GI and general surgical procedures, including gallbladder removal, hernia repair, and anti-reflux surgery.",
          "Benefits typically include less pain after surgery, a shorter stay in hospital, a quicker return to normal activities, and a lower risk of wound infection and incisional hernia compared with open surgery.",
        ],
      },
      {
        heading: "Procedures Performed Laparoscopically",
        paragraphs: [
          "Mr Moussa performs a wide range of laparoscopic procedures: cholecystectomy (gallbladder removal), inguinal and other hernia repairs, fundoplication and hiatus hernia repair for acid reflux, and other benign Upper GI operations. He is trained in advanced laparoscopic techniques and will recommend the most appropriate approach for your condition.",
        ],
      },
      {
        heading: "Recovery and Follow-up",
        paragraphs: [
          "Recovery varies by procedure but is generally faster than with open surgery. You will receive clear instructions before discharge and a plan for follow-up. Mr Moussa and his team are available to support you through your recovery and to address any concerns.",
        ],
      },
    ],
    faqs: [
      { question: "What is keyhole surgery?", answer: "Keyhole surgery (laparoscopic surgery) uses a small camera and thin instruments passed through small cuts in the abdomen. The surgeon views the operation on a screen. It usually means less pain, a shorter hospital stay, and a quicker recovery than open surgery for many procedures." },
      { question: "Which operations can be done laparoscopically?", answer: "Mr Moussa performs many Upper GI and general surgical procedures laparoscopically: gallbladder removal (cholecystectomy), inguinal and other hernia repairs, fundoplication and hiatus hernia repair for acid reflux, and other benign Upper GI operations. He will advise whether keyhole surgery is suitable for you." },
      { question: "How long does recovery take after laparoscopic surgery?", answer: "Recovery depends on the procedure. Many patients go home within a day or two and can return to light activities within 1–2 weeks. You will get personalised advice on wound care, driving, and when you can return to work and exercise." },
    ],
  },
  {
    slug: "robotic-surgery",
    title: "Robotic Surgery",
    seoTitle: "Robotic Surgery London & Hertfordshire | Robotic Surgeon Specialist",
    seoDescription: "Robotic surgery London and Hertfordshire with Mr Osama Moussa. Versius and da Vinci console surgery. Upper GI and hernia surgery with enhanced precision. Spire Bushey, Circle Health Group, West Herts NHS. Book a consultation.",
    description:
      "Employing state-of-the-art robotic technology, Osama performs complex upper GI surgeries with enhanced precision and control. Robotic surgery allows for intricate procedures with minimal trauma to surrounding tissues, resulting in shorter hospital stays and improved patient outcomes.",
    image: "/davinci/da-vinci-5-console-or.jpg",
    imageLeft: true,
    expandedContent: [
      {
        heading: "What is Robotic Surgery?",
        paragraphs: [
          "Robotic surgery uses a console where the surgeon controls precise instruments inside the body. The system provides a magnified 3D view and instruments that can bend and rotate beyond the range of the human hand, allowing very precise movements in confined spaces.",
          "Mr Moussa is trained on two robotic platforms: Versius (CMR) and Intuitive (da Vinci). He uses robotic surgery for selected Upper GI and general surgical procedures where it can offer advantages in precision and recovery.",
        ],
      },
      {
        heading: "Benefits of Robotic Surgery",
        paragraphs: [
          "For suitable patients, benefits can include smaller incisions, less blood loss, less pain, and a faster return to normal activities. The technology can be especially helpful in complex or confined anatomy. Not every procedure or patient is suited to robotics; Mr Moussa will discuss whether it is the right option for you.",
        ],
      },
      {
        heading: "Where is Robotic Surgery Offered?",
        paragraphs: [
          "Robotic Upper GI and general surgery is delivered at West Hertfordshire NHS Trust and at selected private hospitals. Your consultation will cover whether robotic surgery is appropriate for your condition and how to access it.",
        ],
      },
    ],
    faqs: [
      { question: "What is robotic surgery?", answer: "Robotic surgery uses a console where the surgeon controls precise instruments inside the body. The system gives a magnified 3D view and instruments that can bend and rotate more than the human hand, allowing very precise movements. Mr Moussa is trained on Versius and da Vinci systems." },
      { question: "Is robotic surgery better than keyhole surgery?", answer: "For some procedures and patients, robotic surgery can offer advantages in precision and recovery. It is not always the best option—Mr Moussa will discuss whether robotic, standard laparoscopic, or open surgery is most appropriate for your condition." },
      { question: "Where can I have robotic surgery in London or Hertfordshire?", answer: "Mr Osama Moussa offers robotic Upper GI and general surgery at West Hertfordshire NHS Trust and at selected private hospitals including Spire Bushey and Circle Health Group. Book a consultation to discuss your options." },
    ],
  },
  {
    slug: "gallbladder-surgery-cholecystectomy",
    title: "Gallbladder Surgery / Cholecystectomy",
    seoTitle: "Gallbladder Surgery London & Hertfordshire | Cholecystectomy Specialist",
    seoDescription: "Gallbladder surgery (cholecystectomy) and gallstone treatment in London and Hertfordshire, including Hemel Hempstead. Mr Osama Moussa – gallbladder removal surgery specialist. Laparoscopic keyhole removal for gallstones. Spire Bushey, Circle Health Group, West Herts. Book a consultation.",
    description:
      "Specialising in gallbladder surgery, Osama offers cholecystectomy procedures to patients suffering from gallstones or other gallbladder-related conditions. Using advanced laparoscopic techniques, he ensures safe and effective removal of the gallbladder, relieving symptoms and restoring digestive health.",
    image: "/Gallbladder_Gallstone.jpg",
    imageLeft: false,
    expandedContent: [
      {
        heading: "When is Gallbladder Removal Needed?",
        paragraphs: [
          "The gallbladder stores bile and releases it to help digest fats. Gallstones can cause pain (biliary colic), inflammation (cholecystitis), or block the bile duct, leading to jaundice or pancreatitis. When symptoms are recurrent or severe, or when complications occur, removal of the gallbladder (cholecystectomy) is usually recommended.",
          "Removing the gallbladder does not stop the liver from producing bile; the bile flows directly into the intestine, and most people have no long-term digestive problems after surgery.",
        ],
      },
      {
        heading: "How is the Operation Performed?",
        paragraphs: [
          "Mr Moussa performs cholecystectomy almost always by laparoscopic (keyhole) surgery. Several small incisions are used for the camera and instruments; the gallbladder is detached and removed through one of these incisions. This approach is associated with less pain, a shorter hospital stay, and a quicker recovery than open surgery.",
          "In a small number of cases, open surgery or conversion to open may be necessary for safety. This will be discussed with you if relevant.",
        ],
      },
      {
        heading: "Recovery After Cholecystectomy",
        paragraphs: [
          "Most patients go home within a day or two and can return to light activities within a few weeks. You will receive advice on diet, wound care, and when to seek help. Follow-up is arranged to check your recovery and answer any questions.",
        ],
      },
    ],
    faqs: [
      { question: "When do you need gallbladder surgery?", answer: "Gallbladder removal (cholecystectomy) is usually recommended when you have symptomatic gallstones (recurrent pain, inflammation, or complications such as jaundice or pancreatitis). If you have repeated biliary colic or cholecystitis, your doctor or surgeon will discuss whether surgery is the right option." },
      { question: "Is gallbladder surgery done by keyhole?", answer: "Yes. Mr Moussa performs cholecystectomy almost always by laparoscopic (keyhole) surgery. This typically means less pain, a shorter stay in hospital, and a quicker recovery than open surgery. In a small number of cases, open surgery may be needed for safety." },
      { question: "Where can I have gallbladder surgery in London or Hertfordshire?", answer: "Mr Osama Moussa performs gallbladder surgery at Spire Bushey, Circle Health Group hospitals, and West Hertfordshire NHS Trust. Book a consultation via the contact page or by phone to discuss your options." },
      { question: "Is gallstone treatment available near Hemel Hempstead?", answer: "Yes. Patients near Hemel Hempstead can see Mr Osama Moussa for gallstone treatment and gallbladder removal surgery (cholecystectomy). Assessment covers symptoms, scans, and whether keyhole gallbladder surgery is appropriate." },
    ],
  },
  {
    slug: "gastroesophageal-reflux-disease-gord",
    title: "Gastroesophageal Reflux Disease/GORD",
    seoTitle: "Acid Reflux Surgery London | GORD & Reflux Surgery Specialist",
    seoDescription: "Acid reflux surgery London and Hertfordshire. Mr Osama Moussa – acid reflux surgery specialist. GORD treatment, fundoplication, LINX, hiatus hernia repair. Spire Bushey, Circle Health Group, West Herts. Book a consultation.",
    description:
      "Osama offers comprehensive treatments for Gastroesophageal Reflux Disease (GORD), including minimally invasive procedures like laparoscopic hiatus hernia repair and fundoplication. With his expertise in benign oesophagogastric surgery, he provides effective solutions to manage GORD symptoms and improve patients' quality of life.",
    image: "/Gastrooesophageal reflux disease.webp",
    imageLeft: true,
    expandedContent: [
      {
        heading: "What is GORD?",
        paragraphs: [
          "Gastro-oesophageal reflux disease (GORD) occurs when stomach acid repeatedly flows back into the oesophagus, causing symptoms such as heartburn, regurgitation, chest pain, and sometimes cough or hoarseness. Long-standing reflux can lead to inflammation, narrowing, or changes in the lining of the oesophagus, so it is important to have it assessed and treated appropriately.",
          "Many people are first managed with lifestyle changes and medication. When symptoms persist despite treatment, or when you wish to reduce long-term medication, surgery can be an option.",
        ],
      },
      {
        heading: "Surgical Options for GORD",
        paragraphs: [
          "Mr Moussa specialises in laparoscopic anti-reflux surgery. The most common operation is fundoplication: the top of the stomach is wrapped around the lower oesophagus to restore the valve mechanism and reduce reflux. If you have a hiatus hernia, it is repaired at the same time.",
          "Another option for selected patients is the LINX device: a small ring of magnetic beads placed around the oesophagus that strengthens the valve while still allowing food and drink to pass. Mr Moussa will discuss which option, if any, is suitable for you after reviewing your tests and symptoms.",
        ],
      },
      {
        heading: "What to Expect",
        paragraphs: [
          "Surgery is only offered after assessment including endoscopy and often pH and pressure studies. You will have a detailed discussion about the benefits, risks, and recovery. Anti-reflux surgery is effective in the majority of carefully selected patients and can allow many to reduce or stop long-term acid-suppressing medication.",
        ],
      },
    ],
    faqs: [
      { question: "What are the symptoms of a hiatus hernia?", answer: "Hiatus hernia symptoms often include heartburn, regurgitation, chest pain, difficulty swallowing, and sometimes cough or hoarseness. Many people with a hiatus hernia also have GORD. If you have persistent symptoms, see your GP or a specialist for assessment." },
      { question: "When do you need acid reflux surgery?", answer: "Surgery may be considered when acid reflux (GORD) continues despite medication and lifestyle changes, when you want to reduce long-term medication, or when there are complications such as a large hiatus hernia. Assessment with endoscopy and sometimes pH and pressure studies helps determine if surgery is appropriate." },
      { question: "What is the best treatment for chronic acid reflux?", answer: "Treatment depends on severity and your preference. Options include lifestyle changes, acid-suppressing medication (e.g. PPIs), and surgery (fundoplication or LINX device). Mr Moussa will discuss the pros and cons of each after reviewing your symptoms and tests." },
    ],
  },
  {
    slug: "hernia-repair-surgery",
    title: "Hernia Repair Surgery",
    seoTitle: "Hernia Surgeon London & Hertfordshire | Hernia Repair Surgery",
    seoDescription: "Hernia surgeon London and Hertfordshire. Private hernia surgery specialists Hertfordshire – inguinal, ventral, umbilical, femoral, hiatal, TAPP. Hernia specialist near me options at Spire Bushey, Watford, West Herts. Laparoscopic and robotic. Book a consultation.",
    description:
      "Specialising in hernia repair surgery, Osama offers various techniques, including laparoscopic and robotic approaches, to address different types of hernias affecting the upper GI tract. With a focus on patient safety and optimal outcomes, he ensures each procedure is tailored to meet the individual needs of the patient.",
    image: "/Hernia repair surgery.png",
    imageLeft: false,
    expandedContent: [
      {
        heading: "What is a Hernia?",
        paragraphs: [
          "A hernia is when part of the bowel or other tissue pushes through a weakness in the muscle or fascia of the abdominal wall. Hernias can appear in the groin (inguinal), at the umbilicus, in the midline of the abdomen (epigastric, ventral), or at the site of a previous cut (incisional). Hiatus hernias involve the stomach moving up into the chest and are often linked to acid reflux.",
          "Many hernias cause a lump and discomfort; some can cause pain, obstruction, or strangulation and require urgent treatment. Mr Moussa assesses each hernia and recommends the most appropriate repair technique.",
        ],
      },
      {
        heading: "Repair Techniques",
        paragraphs: [
          "Hernia repair can be done by open surgery or laparoscopically (keyhole). For groin hernias, laparoscopic (TAPP) repair is often used. For abdominal wall hernias, either open or laparoscopic repair may be chosen depending on size, position, and previous surgery. Mesh is commonly used to reinforce the repair and reduce the chance of recurrence.",
          "Mr Moussa is experienced in both open and minimally invasive hernia surgery and will explain the recommended approach and the reasons for it.",
        ],
      },
      {
        heading: "Recovery",
        paragraphs: [
          "Recovery depends on the type and size of hernia and the approach used. You will receive advice on wound care, activity, and driving. Follow-up is arranged to ensure you are healing well and to address any concerns.",
        ],
      },
    ],
    faqs: [
      { question: "What are the symptoms of a hernia?", answer: "Common hernia symptoms include a visible lump or bulge (especially when coughing or straining), discomfort or pain in the area, and sometimes a dragging sensation. Groin hernias may cause pain when lifting. If the hernia becomes very painful, red, or you cannot push it back, seek urgent medical attention." },
      { question: "How long is recovery after laparoscopic hernia surgery?", answer: "Recovery varies by hernia type and size. Many patients go home the same day or after a short stay. Light activities can often resume within 1–2 weeks; heavier lifting and sport are usually avoided for several weeks. Mr Moussa will give you personalised advice at your consultation and after surgery." },
      { question: "Where can I see a hernia surgeon in London or Hertfordshire?", answer: "Mr Osama Moussa sees patients at Spire Bushey, Circle Health Group hospitals (including Bishops Wood, The Wellington Hospital), and West Hertfordshire NHS Trust. Book a consultation via the contact page or by phone." },
      { question: "Do you offer private hernia surgery in Hertfordshire?", answer: "Yes. Mr Moussa provides private hernia surgery for patients across Hertfordshire, including Hemel Hempstead, Watford, Bushey, and St Albans. He also sees NHS patients at West Hertfordshire NHS Trust. Both laparoscopic and open hernia repair options are available." },
      { question: "Can I see a hernia specialist near me in Hertfordshire?", answer: "Yes. If you are searching for a hernia specialist near you in Hertfordshire or around Hemel Hempstead, Mr Osama Moussa offers consultant-led hernia assessment and repair for inguinal, umbilical, epigastric, femoral, and other abdominal wall hernias." },
    ],
  },
  {
    slug: "linx-device-gord-treatment",
    title: "LINX Device for GORD Treatment",
    seoTitle: "LINX Device London & Hertfordshire | Acid Reflux Surgery Specialist",
    seoDescription: "LINX device for GORD treatment in London and Hertfordshire. Mr Osama Moussa – acid reflux surgery specialist. Minimally invasive LINX reflux implant. Spire Bushey, Circle Health Group, West Herts. Book a consultation.",
    description:
      "Osama provides innovative treatments like the LINX device for GORD, offering patients a minimally invasive solution to manage reflux symptoms. By implanting the LINX device, he helps restore the natural function of the oesophagus and provides long-term relief from GORD-related issues.",
    image: "/linx-procedure.png",
    imageLeft: true,
    expandedContent: [
      {
        heading: "What is the LINX Device?",
        paragraphs: [
          "LINX is a small, flexible ring of magnetic titanium beads that is placed around the lower oesophagus during a keyhole operation. The beads open when you swallow, allowing food and drink to pass, and close at other times to prevent stomach acid from refluxing. It is designed to restore the natural barrier function without the need to wrap the stomach (fundoplication).",
          "LINX is an option for selected patients with GORD who have responded to acid-suppressing medication but wish to reduce or stop it, and who are suitable for this type of surgery after assessment.",
        ],
      },
      {
        heading: "Assessment and Suitability",
        paragraphs: [
          "Assessment typically includes endoscopy and oesophageal pH and pressure (manometry) studies. LINX is not suitable for everyone: for example, large hiatus hernias or certain oesophageal motility issues may make fundoplication or other treatments more appropriate. Mr Moussa will discuss whether LINX is a good option for you based on your results and symptoms.",
        ],
      },
      {
        heading: "Procedure and Recovery",
        paragraphs: [
          "The device is inserted under general anaesthetic using laparoscopic (keyhole) surgery. Most patients go home within a day or two. You will be advised on diet in the early weeks and on follow-up. Many patients experience significant improvement in reflux symptoms and can reduce or stop acid-suppressing medication. Long-term follow-up helps ensure the device continues to work well.",
        ],
      },
    ],
    faqs: [
      { question: "What is the LINX device?", answer: "LINX is a small ring of magnetic titanium beads placed around the lower oesophagus during keyhole surgery. It opens when you swallow and closes at other times to reduce reflux. It is an alternative to fundoplication for selected patients with GORD who want to reduce or stop long-term medication." },
      { question: "Who is suitable for LINX?", answer: "LINX is suitable for some patients with GORD who have responded to medication but want to reduce or stop it. Assessment includes endoscopy and often pH and pressure (manometry) studies. Large hiatus hernias or certain motility issues may make fundoplication or other treatments more appropriate. Mr Moussa will advise after reviewing your results." },
      { question: "How long does LINX last?", answer: "LINX is designed for long-term use. Many patients have significant improvement in reflux symptoms and can reduce or stop acid-suppressing medication. Long-term follow-up helps ensure the device continues to work well. Mr Moussa will discuss what to expect at your consultation." },
    ],
  },
  {
    slug: "inguinal-hernia-surgery",
    title: "Inguinal Hernia Surgery",
    seoTitle: "Inguinal Hernia Surgeon London & Hertfordshire | Groin Hernia Repair",
    seoDescription: "Inguinal hernia repair Hertfordshire and Hemel Hempstead. Mr Osama Moussa – inguinal hernia surgery specialist. Laparoscopic (TAPP) and open repair. Spire Bushey, Watford, West Herts. Book a consultation.",
    description:
      "Osama specialises in inguinal hernia surgery, offering both traditional and minimally invasive approaches to repair hernias in the groin area. With his expertise, patients can expect safe and effective hernia repair procedures that minimize post-operative discomfort and promote swift recovery.",
    image: "/Laparoscopic inguinal hernia surgery.jpg",
    imageLeft: false,
    expandedContent: [
      {
        heading: "What is an Inguinal Hernia?",
        paragraphs: [
          "An inguinal hernia occurs when part of the bowel or fatty tissue pushes through a weakness in the groin (inguinal) canal. It is more common in men and can cause a visible lump, discomfort, or pain, especially when lifting, coughing, or straining. Without repair, there is a small risk of the hernia becoming stuck or strangulated, which requires urgent surgery.",
          "Repair is usually recommended when the hernia is symptomatic or when you and your surgeon decide the benefits of repair outweigh the risks.",
        ],
      },
      {
        heading: "Repair Options",
        paragraphs: [
          "Mr Moussa offers both open and laparoscopic (TAPP) inguinal hernia repair. Laparoscopic repair is performed through small incisions and often allows a quicker return to normal activities and less post-operative pain for many patients. Mesh is used to reinforce the repair and reduce recurrence. The choice between open and keyhole repair depends on your hernia, general health, and preference, and will be discussed at your consultation.",
        ],
      },
      {
        heading: "Recovery",
        paragraphs: [
          "Recovery is usually quick. You will be advised on wound care, driving, and when you can return to work and physical activity. Follow-up is arranged to check the wound and ensure you are comfortable.",
        ],
      },
    ],
    faqs: [
      { question: "What is an inguinal hernia?", answer: "An inguinal hernia is when bowel or fatty tissue pushes through a weakness in the groin canal. It is more common in men and can cause a lump, discomfort, or pain when lifting, coughing, or straining. Repair is usually recommended when the hernia is symptomatic." },
      { question: "What is TAPP repair for inguinal hernia?", answer: "TAPP (transabdominal preperitoneal) repair is a laparoscopic (keyhole) technique for groin hernias. Mesh is placed to reinforce the defect. It often allows a quicker return to normal activities and less post-operative pain than open repair. Mr Moussa will advise whether TAPP or open repair is best for you." },
      { question: "When can I drive after inguinal hernia surgery?", answer: "You will be advised at discharge. Typically driving is avoided for 1–2 weeks or until you can perform an emergency stop comfortably. Your surgeon will give you personalised advice based on your repair and recovery." },
    ],
  },
  {
    slug: "tapp-hernia-surgery",
    title: "Trans Abdominal Pre Peritoneal Hernia Surgery (TAPP)",
    description:
      "Utilising advanced techniques like TAPP surgery, Osama provides minimally invasive options for patients requiring hernia repair in the abdominal region. TAPP surgery offers the advantage of reduced post-operative pain and quicker return to normal activities compared to traditional open surgery.",
    image: "/Incisional hernia surgery.jpg",
    imageLeft: true,
    expandedContent: [
      {
        heading: "What is TAPP?",
        paragraphs: [
          "TAPP (transabdominal preperitoneal) repair is a laparoscopic (keyhole) technique for groin (inguinal) hernias. The surgeon enters the abdomen, then places a mesh in the preperitoneal space—between the peritoneum and the abdominal wall—to reinforce the hernia defect. Both sides can be repaired during the same operation if needed.",
          "TAPP is well established and is associated with less post-operative pain and a quicker return to normal activities for many patients compared with open repair.",
        ],
      },
      {
        heading: "When is TAPP Used?",
        paragraphs: [
          "TAPP is suitable for many inguinal hernias, including recurrent hernias after previous open repair. Mr Moussa will assess your hernia and general health to decide whether TAPP is the best option for you. In some cases, open repair may be recommended instead.",
        ],
      },
      {
        heading: "Recovery and Follow-up",
        paragraphs: [
          "Most patients go home the same day or after a short stay. You will receive advice on wound care, driving, and activity. Follow-up is arranged to ensure you are recovering well.",
        ],
      },
    ],
    faqs: [
      { question: "What is TAPP hernia surgery?", answer: "TAPP (transabdominal preperitoneal) repair is a keyhole technique for groin (inguinal) hernias. The surgeon places a mesh in the preperitoneal space to reinforce the hernia. It is associated with less post-operative pain and a quicker return to normal activities for many patients." },
      { question: "Is TAPP suitable for recurrent hernias?", answer: "Yes. TAPP can be used for recurrent inguinal hernias after previous open repair. Mr Moussa will assess your hernia and general health to decide whether TAPP is the best option. In some cases, open repair may be recommended instead." },
      { question: "How long is the stay after TAPP surgery?", answer: "Many patients go home the same day or after a short stay. You will receive advice on wound care, driving, and activity. Follow-up is arranged to check you are recovering well." },
    ],
  },
  {
    slug: "epigastric-hernia-surgery",
    title: "Epigastric Hernia Surgery",
    seoTitle: "Epigastric Hernia Repair Hertfordshire & Hemel Hempstead",
    seoDescription: "Epigastric hernia repair Hertfordshire and Hemel Hempstead with Mr Osama Moussa. Surgical repair of upper abdominal wall weakness. Laparoscopic and open options. Spire Bushey, West Herts. Book a consultation.",
    description:
      "For patients with epigastric hernias, Osama performs surgical procedures aimed at repairing the weakened abdominal wall and restoring its integrity. Through meticulous surgical techniques, he ensures optimal outcomes and minimal recurrence rates for patients undergoing epigastric hernia repair.",
    image: "/Hernia repair surgery.png",
    imageLeft: false,
    expandedContent: [
      {
        heading: "What is an Epigastric Hernia?",
        paragraphs: [
          "An epigastric hernia is a bulge through the midline of the upper abdomen (between the breastbone and the navel), where fatty tissue or sometimes bowel pushes through a weakness in the abdominal wall. It can cause discomfort or pain, especially when straining or lifting. Repair is usually recommended when the hernia is symptomatic or increasing in size.",
          "Mr Moussa repairs epigastric hernias using open or laparoscopic techniques depending on the size and your circumstances.",
        ],
      },
      {
        heading: "Repair and Recovery",
        paragraphs: [
          "Repair typically involves closing the defect and often reinforcing it with mesh to reduce the risk of recurrence. You will receive advice on wound care and activity. Recovery is usually straightforward, and follow-up is arranged to check your progress.",
        ],
      },
    ],
    faqs: [
      { question: "What is an epigastric hernia?", answer: "An epigastric hernia is a bulge through the midline of the upper abdomen, between the breastbone and the navel. Fatty tissue or sometimes bowel pushes through a weakness in the abdominal wall. It can cause discomfort or pain when straining or lifting. Repair is usually recommended when symptomatic or enlarging." },
      { question: "How is an epigastric hernia repaired?", answer: "Mr Moussa repairs epigastric hernias using open or laparoscopic (keyhole) techniques depending on the size and your circumstances. The defect is closed and often reinforced with mesh to reduce recurrence. You will get advice on wound care and activity." },
      { question: "Can I have epigastric hernia repair in Hertfordshire or near Hemel Hempstead?", answer: "Yes. Mr Osama Moussa offers epigastric hernia repair for patients across Hertfordshire, including Hemel Hempstead, Watford, and Bushey. Appointments are available at Spire Bushey, Circle Health Group hospitals, and West Hertfordshire NHS Trust." },
    ],
  },
  {
    slug: "ventral-hernia-surgery",
    title: "Ventral Hernia Surgery",
    description:
      "Osama offers expert care for patients with ventral hernias, employing surgical techniques tailored to the specific needs of each individual. Whether through laparoscopic or traditional approaches, he ensures comprehensive hernia repair with minimal post-operative complications.",
    image: "/Ventral hernia surgery.jpg",
    imageLeft: true,
    expandedContent: [
      {
        heading: "What is a Ventral Hernia?",
        paragraphs: [
          "Ventral hernia is a general term for hernias in the front (ventral) abdominal wall. These include umbilical and paraumbilical hernias (around the navel), epigastric hernias (upper midline), and incisional hernias (through a previous surgical scar). They can cause a visible bulge, discomfort, or pain and may increase in size over time.",
          "Repair is recommended when the hernia is symptomatic, enlarging, or when there is concern about complications. Mr Moussa will assess the size, position, and your general health to recommend the most appropriate repair.",
        ],
      },
      {
        heading: "Repair Techniques",
        paragraphs: [
          "Ventral hernias can be repaired by open surgery or laparoscopically. Smaller hernias may be closed with or without mesh; larger or incisional hernias usually require mesh to reinforce the abdominal wall and reduce recurrence. Mr Moussa will explain the recommended approach and what to expect during recovery.",
        ],
      },
      {
        heading: "Recovery",
        paragraphs: [
          "Recovery depends on the size of the hernia and the type of repair. You will receive clear instructions on wound care, activity, and follow-up. Supporting the wound when coughing or moving and avoiding heavy lifting in the early weeks helps the repair heal well.",
        ],
      },
    ],
    faqs: [
      { question: "What is a ventral hernia?", answer: "Ventral hernia is a general term for hernias in the front abdominal wall: umbilical (at the navel), paraumbilical (near the navel), epigastric (upper midline), and incisional (through a previous surgical scar). They can cause a bulge, discomfort, or pain and may enlarge over time." },
      { question: "Can ventral hernias be repaired by keyhole surgery?", answer: "Yes. Many ventral hernias can be repaired laparoscopically. Smaller hernias may be closed with or without mesh; larger or incisional hernias usually need mesh to reinforce the wall. Mr Moussa will explain the best approach for your hernia." },
      { question: "When should I have my ventral hernia repaired?", answer: "Repair is usually recommended when the hernia is symptomatic, enlarging, or when there is concern about complications. Mr Moussa will assess the size, position, and your general health and recommend the most appropriate repair and timing." },
    ],
  },
  {
    slug: "umbilical-paraumbilical-hernia-surgery",
    title: "Umbilical and Paraumbilical Hernia Surgery",
    seoTitle: "Umbilical Hernia Repair Hertfordshire & Hemel Hempstead",
    seoDescription: "Umbilical hernia repair Hertfordshire and Hemel Hempstead. Mr Osama Moussa – umbilical and paraumbilical hernia surgery with minimally invasive options. Spire Bushey, West Herts. Book a consultation.",
    description:
      "Specialising in umbilical and paraumbilical hernia surgery, Osama provides patients with effective treatment options to address these common abdominal wall defects. With his expertise in minimally invasive surgery, he offers patients faster recovery times and reduced risk of complications.",
    image: "/Umbilical hernia surgery.jpg",
    imageLeft: false,
    expandedContent: [
      {
        heading: "What are Umbilical and Paraumbilical Hernias?",
        paragraphs: [
          "An umbilical hernia is a bulge at the navel (umbilicus); a paraumbilical hernia is a bulge near but not exactly at the navel. Both occur when tissue pushes through a weakness in the abdominal wall. They are common and can develop in adults due to increased pressure (e.g. obesity, pregnancy, heavy lifting) or weakness in the area.",
          "Repair is usually recommended when the hernia causes symptoms, is enlarging, or when there is a risk of complications. Mr Moussa will assess the hernia and discuss the best approach for repair.",
        ],
      },
      {
        heading: "Repair and Recovery",
        paragraphs: [
          "Repair can be done by open surgery or laparoscopically depending on the size and your circumstances. Mesh may be used to reinforce the defect. Recovery is usually straightforward with advice on wound care and gradual return to activity. Follow-up ensures you are healing well.",
        ],
      },
    ],
    faqs: [
      { question: "What is an umbilical hernia?", answer: "An umbilical hernia is a bulge at the navel; a paraumbilical hernia is near but not exactly at the navel. Both occur when tissue pushes through a weakness in the abdominal wall. They are common in adults and can develop due to increased pressure (e.g. obesity, pregnancy, heavy lifting)." },
      { question: "When should an umbilical or paraumbilical hernia be repaired?", answer: "Repair is usually recommended when the hernia causes symptoms, is enlarging, or when there is a risk of complications. Mr Moussa will assess the hernia and discuss the best approach—open or laparoscopic—and whether mesh is needed." },
      { question: "How long is recovery after umbilical hernia repair?", answer: "Recovery is usually straightforward. You will get advice on wound care and gradual return to activity. Follow-up ensures you are healing well. Heavy lifting is typically avoided for several weeks." },
      { question: "Is umbilical hernia repair available in Hertfordshire or Hemel Hempstead?", answer: "Yes. Mr Osama Moussa provides umbilical and paraumbilical hernia repair for patients in Hertfordshire and near Hemel Hempstead, with clinics at Spire Bushey, Circle Health Group, and West Hertfordshire NHS Trust." },
    ],
  },
  {
    slug: "abdominal-wall-reconstruction",
    title: "Abdominal Wall Reconstruction",
    seoTitle: "Abdominal Wall Reconstruction Hertfordshire | Specialist Surgery",
    seoDescription: "Abdominal wall reconstruction surgery in Hertfordshire and London. Mr Osama Moussa – abdominal wall reconstruction for complex hernias and previous surgery. Specialist assessment at Spire Bushey, Circle Health Group, West Herts. Book a consultation.",
    description:
      "For patients requiring abdominal wall reconstruction due to trauma, injury, or previous surgeries, Osama offers specialised surgical procedures to restore abdominal integrity and function. Through personalised treatment plans, he aims to improve patients' quality of life and overall well-being.",
    image: "/Abdominal wall reconstruction.webp",
    imageLeft: true,
    expandedContent: [
      {
        heading: "What is Abdominal Wall Reconstruction?",
        paragraphs: [
          "Abdominal wall reconstruction restores the structure and function of the abdominal wall when it has been weakened or damaged by previous surgery (e.g. large incisional hernias), trauma, or infection. The aim is to close the defect, reinforce the wall (often with mesh), and improve comfort, appearance, and function.",
          "These operations can be complex and are tailored to the individual. Mr Moussa has experience in abdominal wall surgery and works with you to plan the most appropriate approach.",
        ],
      },
      {
        heading: "Assessment and Planning",
        paragraphs: [
          "Assessment includes examining the abdomen, reviewing previous operations and imaging, and considering your general health. Sometimes imaging (e.g. CT) is used to plan the repair. You will have a detailed discussion about the procedure, the use of mesh, and what to expect during recovery.",
        ],
      },
      {
        heading: "Recovery",
        paragraphs: [
          "Recovery depends on the extent of surgery. You will receive clear advice on wound care, activity, and follow-up. Supporting the abdomen when moving and avoiding heavy lifting for the period advised helps the repair heal and reduces the risk of recurrence.",
        ],
      },
    ],
    faqs: [
      { question: "What is abdominal wall reconstruction?", answer: "Abdominal wall reconstruction restores the structure and function of the abdominal wall when it has been weakened or damaged by previous surgery (e.g. large incisional hernias), trauma, or infection. The aim is to close the defect, reinforce the wall (often with mesh), and improve comfort, appearance, and function." },
      { question: "Who needs abdominal wall reconstruction?", answer: "Patients with large or complex incisional hernias, or damage to the abdominal wall from previous surgery, trauma, or infection, may benefit. Assessment includes examining the abdomen, reviewing previous operations and imaging, and considering your general health. Mr Moussa will discuss the procedure and what to expect." },
      { question: "How long is recovery after abdominal wall reconstruction?", answer: "Recovery depends on the extent of surgery. You will get clear advice on wound care, activity, and follow-up. Supporting the abdomen when moving and avoiding heavy lifting for the period advised helps the repair heal and reduces the risk of recurrence." },
      { question: "Is abdominal wall reconstruction available privately in Hertfordshire?", answer: "Yes. Mr Osama Moussa offers abdominal wall reconstruction surgery for NHS and private patients in Hertfordshire and London. Consultations are available at Spire Bushey, Circle Health Group hospitals, and West Hertfordshire NHS Trust." },
    ],
  },
  {
    slug: "skin-lumps-lipomas",
    title: "Skin Lumps & Lipomas",
    description:
      "Osama provides expert evaluation and surgical management of skin lumps, ensuring accurate diagnosis and appropriate treatment options. With his expertise in minimally invasive techniques, he offers patients safe and effective removal of skin lumps with minimal scarring. With his expertise in soft tissue surgery, he ensures precise and thorough removal of lipomas with minimal risk of complications.",
    image: "/Lipoma surgery.jpg",
    imageLeft: false,
    expandedContent: [
      {
        heading: "What are Skin Lumps and Lipomas?",
        paragraphs: [
          "Skin lumps can be caused by a variety of conditions. Lipomas are common, benign (non-cancerous) fatty lumps that sit under the skin. They are usually soft, mobile, and painless but can be removed if they cause discomfort, are enlarging, or for cosmetic reasons. Other lumps (cysts, lymph nodes, etc.) need assessment to confirm the diagnosis and decide on the best management.",
          "Mr Moussa assesses lumps in the skin and soft tissues and can arrange removal when appropriate. If there is any doubt about the diagnosis, further investigation or referral may be recommended.",
        ],
      },
      {
        heading: "Removal and Recovery",
        paragraphs: [
          "Removal is usually done under local or general anaesthetic depending on the size and site. Incisions are kept as small as possible to minimise scarring. You will receive advice on wound care and follow-up. Most procedures are straightforward with a quick recovery.",
        ],
      },
    ],
    faqs: [
      { question: "What is a lipoma?", answer: "A lipoma is a benign (non-cancerous) fatty lump under the skin. It is usually soft, mobile, and painless. Lipomas can be removed if they cause discomfort, are enlarging, or for cosmetic reasons. Mr Moussa assesses skin and soft tissue lumps and can arrange removal when appropriate." },
      { question: "Should I have my lipoma removed?", answer: "Removal is optional unless the lump is causing symptoms, enlarging, or you want it removed for cosmetic reasons. If there is any doubt about the diagnosis, further investigation or referral may be recommended. Mr Moussa will advise after examining the lump." },
      { question: "How is a lipoma removed?", answer: "Removal is usually under local or general anaesthetic depending on size and site. The incision is kept as small as possible to minimise scarring. Recovery is typically quick with advice on wound care and follow-up." },
    ],
  },
];

export function getProcedureBySlug(slug: string): ProcedureItem | undefined {
  return procedures.find((p) => p.slug === slug);
}

export function getProcedureSlugs(): string[] {
  return procedures.map((p) => p.slug);
}
