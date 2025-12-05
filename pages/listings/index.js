import { useState } from 'react';
import Layout from '../../components/Layout';
import ListingCard from '../../components/ListingCard';
import { getContent } from '../../lib/api';

export default function Listings({ listings }) {
  // ... (useState declarations for filters and search)

  // FIX: Add safety checks here to ensure properties exist before calling toLowerCase()
  const filteredListings = listings.filter((listing) => {
    // 1. Check Search Term (title or description)
    const matchesSearch = listing.title.toLowerCase().includes(searchTerm.toLowerCase());
    
    // 2. Check Location Filter (Must exist AND match, or filter is set to 'All')
    const matchesLocation = 
      selectedLocation === 'All' || 
      (listing.location && listing.location.toLowerCase() === selectedLocation.toLowerCase());
    
    // 3. Check Category Filter (Must exist AND match, or filter is set to 'All')
    const matchesCategory = 
      selectedCategory === 'All' || 
      (listing.category && listing.category.toLowerCase() === selectedCategory.toLowerCase());
    
    // 4. Check Bedrooms Filter (Must match or filter is set to 0)
    const matchesBedrooms = selectedBedrooms === 0 || listing.bedrooms >= selectedBedrooms;

    return matchesSearch && matchesLocation && matchesCategory && matchesBedrooms;
  });

  return (
    <Layout title="Properties for Sale & Rent">
      <div className="bg-secondary text-white py-12 text-center">
        <h1 className="text-4xl font-heading font-bold">Property Listings</h1>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Filters */}
        <div className="bg-white p-6 rounded-lg shadow-sm mb-8 grid grid-cols-1 md:grid-cols-4 gap-4">
          <input 
            type="text" 
            placeholder="Search properties..." 
            className="border p-2 rounded w-full"
            onChange={(e) => setSearch(e.target.value)}
          />
          <select className="border p-2 rounded" onChange={(e) => setFilter({...filter, location: e.target.value})}>
            <option value="All">All Locations</option>
            <option value="Malir Cantt">Malir Cantt</option>
            <option value="Askari IV">Askari IV</option>
            <option value="Askari V">Askari V</option>
            <option value="Askari VI">Askari VI</option>
          </select>
          <select className="border p-2 rounded" onChange={(e) => setFilter({...filter, category: e.target.value})}>
            <option value="All">All Types</option>
            <option value="Sale">For Sale</option>
            <option value="Rent">For Rent</option>
          </select>
          <div className="bg-gray-100 p-2 rounded text-center text-gray-500 text-sm flex items-center justify-center">
            {filtered.length} Properties Found
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map(item => <ListingCard key={item.slug} listing={item} />)}
        </div>
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const listings = getContent('listings');
  return { props: { listings } };
}
