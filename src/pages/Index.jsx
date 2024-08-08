import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-center">All About Cats</h1>
        
        <div className="mb-8">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg"
            alt="A cute cat"
            className="mx-auto object-cover w-full h-[400px] rounded-lg shadow-lg"
          />
        </div>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Fascinating Cat Facts</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-6 space-y-2">
              <li>Cats have over 20 vocalizations, including the famous meow.</li>
              <li>A group of cats is called a "clowder".</li>
              <li>Cats spend 70% of their lives sleeping.</li>
              <li>A cat's sense of smell is 14 times stronger than a human's.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Popular Cat Breeds</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {["Siamese", "Persian", "Maine Coon", "Bengal"].map((breed) => (
                <div key={breed} className="bg-white p-4 rounded-lg shadow">
                  <h3 className="font-semibold text-lg mb-2">{breed}</h3>
                  <p className="text-gray-600">
                    {breed} cats are known for their unique characteristics and loving nature.
                  </p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <p className="text-center text-gray-600">
          Cats make wonderful companions and have been domesticated for thousands of years!
        </p>
      </div>
    </div>
  );
};

export default Index;
