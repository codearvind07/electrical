'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Checkbox } from '@/components/ui/checkbox';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';

// ✅ Define TypeScript type for formData
type FormData = {
  name: string;
  company: string;
  email: string;
  phone: string;
  projectType: string;
  productInterest: string[];
  budget: string;
  timeline: string;
  description: string;
  heardAbout: string;
  newsletter: boolean;
};

export default function EnquirePage() {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    company: '',
    email: '',
    phone: '',
    projectType: '',
    productInterest: [],
    budget: '',
    timeline: '',
    description: '',
    heardAbout: '',
    newsletter: false,
  });

  const productOptions = [
    { id: 'electronic-panels', label: 'Electronic Panels' },
    { id: 'meter-board-panel', label: 'Meter Board Panel' },
    { id: 'synchronizing-panel', label: 'Synchronizing Panel' },
    { id: 'bus-ducts', label: 'Bus Ducts' },
    { id: 'cable-trays', label: 'Cable Trays' },
    { id: 'apfc-panels', label: 'APFC Panels' },
    { id: 'other', label: 'Other' },
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (id: string) => {
    setFormData(prev => {
      const newProductInterest = [...prev.productInterest];
      if (newProductInterest.includes(id)) {
        return { ...prev, productInterest: newProductInterest.filter(item => item !== id) };
      } else {
        return { ...prev, productInterest: [...newProductInterest, id] };
      }
    });
  };

  const handleNewsletterChange = (checked: boolean) => {
    setFormData(prev => ({ ...prev, newsletter: checked }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      toast({
        title: "Enquiry Submitted",
        description: "Thank you for your interest! We will get back to you shortly.",
      });
      // Reset form
      setFormData({
        name: '',
        company: '',
        email: '',
        phone: '',
        projectType: '',
        productInterest: [],
        budget: '',
        timeline: '',
        description: '',
        heardAbout: '',
        newsletter: false,
      });
    }, 1500);
  };

  return (
    <div className="bg-gray-50 py-12 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="p-8 sm:p-12">
            <h1 className="text-3xl font-bold mb-8 text-center">Request a Quote</h1>
            
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Contact Info */}
              <div className="space-y-6">
                <h2 className="text-xl font-semibold border-b pb-2">Contact Information</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name <span className="text-red-500">*</span></Label>
                    <Input id="name" name="name" required value={formData.name} onChange={handleInputChange} placeholder="John Smith" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="company">Company Name</Label>
                    <Input id="company" name="company" value={formData.company} onChange={handleInputChange} placeholder="Your Company Ltd." />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address <span className="text-red-500">*</span></Label>
                    <Input id="email" name="email" type="email" required value={formData.email} onChange={handleInputChange} placeholder="your@email.com" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number <span className="text-red-500">*</span></Label>
                    <Input id="phone" name="phone" required value={formData.phone} onChange={handleInputChange} placeholder="+91 98765 43210" />
                  </div>
                </div>
              </div>

              {/* Project Details */}
              <div className="space-y-6">
                <h2 className="text-xl font-semibold border-b pb-2">Project Details</h2>
                <div className="space-y-4">
                  <Label>Project Type <span className="text-red-500">*</span></Label>
                  <RadioGroup value={formData.projectType} onValueChange={(val) => handleSelectChange('projectType', val)} required>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="residential" id="residential" />
                        <Label htmlFor="residential">Residential</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="commercial" id="commercial" />
                        <Label htmlFor="commercial">Commercial</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="industrial" id="industrial" />
                        <Label htmlFor="industrial">Industrial</Label>
                      </div>
                    </div>
                  </RadioGroup>
                </div>

                <div className="space-y-4">
                  <Label>Products of Interest <span className="text-red-500">*</span></Label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                    {productOptions.map(option => (
                      <div key={option.id} className="flex items-center space-x-2">
                        <Checkbox
                          id={option.id}
                          checked={formData.productInterest.includes(option.id)}
                          onCheckedChange={() => handleCheckboxChange(option.id)}
                        />
                        <Label htmlFor={option.id}>{option.label}</Label>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label>Budget Range</Label>
                    <Select value={formData.budget} onValueChange={(val) => handleSelectChange('budget', val)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a budget range" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="below-1-lakh">Below ₹1 Lakh</SelectItem>
                        <SelectItem value="1-5-lakh">₹1 Lakh - ₹5 Lakh</SelectItem>
                        <SelectItem value="5-10-lakh">₹5 Lakh - ₹10 Lakh</SelectItem>
                        <SelectItem value="10-50-lakh">₹10 Lakh - ₹50 Lakh</SelectItem>
                        <SelectItem value="above-50-lakh">Above ₹50 Lakh</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label>Project Timeline</Label>
                    <Select value={formData.timeline} onValueChange={(val) => handleSelectChange('timeline', val)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a timeline" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="immediate">Immediate (within a month)</SelectItem>
                        <SelectItem value="1-3-months">1-3 months</SelectItem>
                        <SelectItem value="3-6-months">3-6 months</SelectItem>
                        <SelectItem value="6-12-months">6-12 months</SelectItem>
                        <SelectItem value="future">Future planning</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description">Project Description <span className="text-red-500">*</span></Label>
                  <Textarea
                    id="description"
                    name="description"
                    required
                    rows={5}
                    value={formData.description}
                    onChange={handleInputChange}
                    placeholder="Describe your project requirements in detail..."
                  />
                </div>
              </div>

              {/* Additional Info */}
              <div className="space-y-6">
                <h2 className="text-xl font-semibold border-b pb-2">Additional Information</h2>
                <div className="space-y-2">
                  <Label htmlFor="heardAbout">How did you hear about us?</Label>
                  <Select value={formData.heardAbout} onValueChange={(val) => handleSelectChange('heardAbout', val)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select an option" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="search-engine">Search Engine</SelectItem>
                      <SelectItem value="social-media">Social Media</SelectItem>
                      <SelectItem value="referral">Referral</SelectItem>
                      <SelectItem value="advertisement">Advertisement</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="newsletter"
                    checked={formData.newsletter}
                    onCheckedChange={(checked) => handleNewsletterChange(checked as boolean)}
                  />
                  <Label htmlFor="newsletter">Subscribe to our newsletter for latest updates</Label>
                </div>
              </div>

              <div className="pt-4">
                <Button
                  type="submit"
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3"
                  disabled={loading}
                >
                  {loading ? (
                    <span className="flex items-center justify-center">
                      Submitting...
                      <svg className="ml-2 h-4 w-4 animate-spin" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                    </span>
                  ) : (
                    "Submit Enquiry"
                  )}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
