export default function ProjectCard({ title, image, description, link }) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <a href={link} target="_blank" className="text-blue-600 font-medium hover:underline">
          View Project →
        </a>
      </div>
    </div>
  );
}
