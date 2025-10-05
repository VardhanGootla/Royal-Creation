import React from 'react';
import Navbar from '../../Navbar';
import Footer from '../../Footer';

const DecorTrends = () => {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-8" style={{ color: 'rgb(255, 102, 163)' }}>From bold colors to sustainable touches, explore what’s in this year</h1>
        <div className="prose lg:prose-xl mx-auto">
          <p>
            Stay ahead of the curve with the latest decor trends that are transforming events and celebrations. 
            From sustainable choices to bold color palettes, this year brings exciting new possibilities to make 
            your event truly memorable and visually stunning.
          </p>
          <img
          src="https://images.pexels.com/photos/1616113/pexels-photo-1616113.jpeg"
          class="img-fluid mb-4 mt-4 rounded-5 w-auto h-25"
          alt="img"
        ></img>
          <ol className="list-group mb-3">
            <li className="list-group-item">
              <strong>Sustainable & Eco-Friendly Decor:</strong> Embrace biodegradable materials, reusable elements, 
              and locally sourced florals. Couples are increasingly choosing eco-conscious options that minimize 
              environmental impact without compromising on elegance.
            </li>
            <li className="list-group-item">
              <strong>Mixed Metallics:</strong> Move beyond single metal themes. Combine gold, silver, bronze, and 
              copper elements for a sophisticated, layered look that adds depth and visual interest to your decor.
            </li>
            <li className="list-group-item">
              <strong>Bold Color Palettes:</strong> While pastels remain popular, rich jewel tones like emerald green, 
              sapphire blue, and amethyst purple are making a strong comeback for those wanting to make a dramatic statement.
            </li>
            <li className="list-group-item">
              <strong>Textured Fabrics:</strong> Velvet, silk, and linen are being used extensively for table runners, 
              chair covers, and drapery. These textures add luxury and warmth to any event space.
            </li>
            <li className="list-group-item">
              <strong>Organic & Asymmetrical Arrangements:</strong> Floral arrangements are moving away from perfect 
              symmetry towards more natural, garden-style designs that feel fresh, wild, and effortlessly beautiful.
            </li>
            <li className="list-group-item">
              <strong>Statement Ceiling Decor:</strong> Don't ignore the overhead space. Hanging installations, 
              fabric draping, and floral chandeliers are transforming ordinary venues into extraordinary spaces.
            </li>
            <li className="list-group-item">
              <strong>Personalized & Custom Elements:</strong> From monogrammed decor to custom illustrations, 
              personal touches that reflect the couple's story are becoming central to event design.
            </li>
            <li className="list-group-item">
              <strong>Vintage & Antique Accents:</strong> Incorporating family heirlooms, vintage furniture, 
              and antique decorative pieces adds character and tells a richer story than all-new decor.
            </li>
            <li className="list-group-item">
              <strong>Interactive Lighting:</strong> Beyond basic uplighting, dynamic LED installations, 
              projection mapping, and interactive light displays are creating immersive experiences for guests.
            </li>
            <li className="list-group-item">
              <strong>Minimalist Elegance:</strong> For those who prefer understated sophistication, 
              clean lines, neutral palettes, and strategic negative space create powerful visual impact 
              through simplicity rather than abundance.
            </li>
          </ol>
          
          <div className="mt-8 p-4 bg-gray-50 rounded-lg">
            <h3 className="font-semibold mb-2">Pro Decor Tips</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>Choose 2-3 main trends that complement your venue and personal style</li>
              <li>Consider your guests' experience - ensure decor doesn't obstruct views or movement</li>
              <li>Mix high-impact pieces with simpler elements to balance your budget</li>
              <li>Take photos of your venue empty to better plan your decor placement</li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default DecorTrends;