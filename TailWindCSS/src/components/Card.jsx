function Card() {
  return (
    <div className="bg-white shadow-lg rounded-lg border border-gray-200" style={{ width: '200px', margin: '0 auto' }}>
      <img
        className="w-full h-48 object-cover"
        src="https://via.placeholder.com/400x200"
        alt="Card Image"
      />
      <div className="p-4">
        <h2 className="text-2xl font-bold text-gray-800">Card Title</h2>
        <p className="text-gray-600 mt-2">
          This is a simple card component styled with Tailwind CSS. You can use
          it as a starting point for your designs.
        </p>
        <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">
          Learn More
        </button>
      </div>
    </div>
  );
}

export default Card;