
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import PageLayout from '@/components/layout/PageLayout';
import { Lightbulb, Users, Target } from 'lucide-react';

const StartupIncubationPage = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    startupName: '',
    focusArea: '',
    founderName: '',
    location: '',
    mobileNumber: '',
    emailId: '',
    websiteLinkedIn: '',
    teamSize: '',
    description: '',
    startupStage: '',
    registeredEntity: '',
    dpiitRegistered: '',
    supportSeeking: '',
    fundingStatus: '',
    otherComments: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Startup Application Submitted Successfully!",
        description: "We'll review your application and get back to you soon.",
        variant: "default",
      });
      // Reset form
      setFormData({
        startupName: '',
        focusArea: '',
        founderName: '',
        location: '',
        mobileNumber: '',
        emailId: '',
        websiteLinkedIn: '',
        teamSize: '',
        description: '',
        startupStage: '',
        registeredEntity: '',
        dpiitRegistered: '',
        supportSeeking: '',
        fundingStatus: '',
        otherComments: ''
      });
    }, 1500);
  };

  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="bg-brand-purple text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Welcome Startups (Incubates)</h1>
            <div className="text-xl text-gray-300 mb-8 space-y-4">
              <p className="text-brand-orange font-semibold">
                Join CITIL's dynamic ecosystem and accelerate your startup journey
              </p>
              <p>
                Chennai Institute of Technology Innovation Labs provides comprehensive support 
                to innovative startups through our incubation programs, mentorship, funding opportunities, 
                and access to cutting-edge facilities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-brand-blue">Why Incubate with CITIL?</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="shadow-lg border-t-4 border-t-brand-orange">
                <CardContent className="p-6 text-center">
                  <Lightbulb className="h-12 w-12 text-brand-purple mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Innovation Support</h3>
                  <p className="text-gray-600">Access to 30+ state-of-the-art centres of excellence and cutting-edge technology infrastructure.</p>
                </CardContent>
              </Card>
              
              <Card className="shadow-lg border-t-4 border-t-brand-blue">
                <CardContent className="p-6 text-center">
                  <Users className="h-12 w-12 text-brand-orange mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Expert Mentorship</h3>
                  <p className="text-gray-600">Connect with industry experts, successful entrepreneurs, and academic leaders for guidance.</p>
                </CardContent>
              </Card>
              
              <Card className="shadow-lg border-t-4 border-t-brand-purple">
                <CardContent className="p-6 text-center">
                  <Target className="h-12 w-12 text-brand-blue mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Market Access</h3>
                  <p className="text-gray-600">Leverage our network of corporate partners and investors to scale your startup.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-center">Startup Incubation Application</CardTitle>
                <div className="text-center text-gray-600 mt-4 space-y-2">
                  <p>* Indicates required question</p>
                  <div className="text-sm space-y-1">
                    <p>• Fill the form with precision by providing accurate and necessary details.</p>
                    <p>• Ensure all mandatory fields are filled, using clear and legible text.</p>
                    <p>• Review your entries before submission to catch any errors.</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="startupName" className="text-base font-medium">Name of the startup *</Label>
                      <Input
                        id="startupName"
                        name="startupName"
                        value={formData.startupName}
                        onChange={handleInputChange}
                        placeholder="Enter startup name"
                        required
                        className="mt-2"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="focusArea" className="text-base font-medium">Focus Area of Startup *</Label>
                      <Input
                        id="focusArea"
                        name="focusArea"
                        value={formData.focusArea}
                        onChange={handleInputChange}
                        placeholder="e.g., AI/ML, FinTech, HealthTech, IoT"
                        required
                        className="mt-2"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="founderName" className="text-base font-medium">Founder Name *</Label>
                      <Input
                        id="founderName"
                        name="founderName"
                        value={formData.founderName}
                        onChange={handleInputChange}
                        placeholder="Enter founder's name"
                        required
                        className="mt-2"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="location" className="text-base font-medium">Location of the startup *</Label>
                      <Input
                        id="location"
                        name="location"
                        value={formData.location}
                        onChange={handleInputChange}
                        placeholder="City, State, Country"
                        required
                        className="mt-2"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="mobileNumber" className="text-base font-medium">Mobile Number *</Label>
                      <Input
                        id="mobileNumber"
                        name="mobileNumber"
                        value={formData.mobileNumber}
                        onChange={handleInputChange}
                        placeholder="+91 9876543210"
                        required
                        className="mt-2"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="emailId" className="text-base font-medium">Email Id *</Label>
                      <Input
                        id="emailId"
                        name="emailId"
                        type="email"
                        value={formData.emailId}
                        onChange={handleInputChange}
                        placeholder="founder@startup.com"
                        required
                        className="mt-2"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="websiteLinkedIn" className="text-base font-medium">Website or LinkedIn link *</Label>
                      <Input
                        id="websiteLinkedIn"
                        name="websiteLinkedIn"
                        type="url"
                        value={formData.websiteLinkedIn}
                        onChange={handleInputChange}
                        placeholder="https://startup.com or LinkedIn URL"
                        required
                        className="mt-2"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="teamSize" className="text-base font-medium">Team Size *</Label>
                      <Input
                        id="teamSize"
                        name="teamSize"
                        type="number"
                        value={formData.teamSize}
                        onChange={handleInputChange}
                        placeholder="Number of team members"
                        required
                        className="mt-2"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="description" className="text-base font-medium">Description about your startup *</Label>
                    <Textarea
                      id="description"
                      name="description"
                      value={formData.description}
                      onChange={handleInputChange}
                      placeholder="Provide a detailed description of your startup, its vision, mission, and unique value proposition..."
                      required
                      className="mt-2 min-h-[120px]"
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="startupStage" className="text-base font-medium">Startup stage *</Label>
                      <Select onValueChange={(value) => handleSelectChange('startupStage', value)} required>
                        <SelectTrigger className="mt-2">
                          <SelectValue placeholder="Select startup stage" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="idea">Idea Stage</SelectItem>
                          <SelectItem value="prototype">Prototype</SelectItem>
                          <SelectItem value="mvp">MVP</SelectItem>
                          <SelectItem value="early-stage">Early Stage</SelectItem>
                          <SelectItem value="growth">Growth Stage</SelectItem>
                          <SelectItem value="scaling">Scaling</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div>
                      <Label htmlFor="registeredEntity" className="text-base font-medium">Registered entity as *</Label>
                      <Select onValueChange={(value) => handleSelectChange('registeredEntity', value)} required>
                        <SelectTrigger className="mt-2">
                          <SelectValue placeholder="Select entity type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="private-limited">Private Limited Company</SelectItem>
                          <SelectItem value="llp">Limited Liability Partnership (LLP)</SelectItem>
                          <SelectItem value="partnership">Partnership</SelectItem>
                          <SelectItem value="proprietorship">Sole Proprietorship</SelectItem>
                          <SelectItem value="not-registered">Not Registered Yet</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="dpiitRegistered" className="text-base font-medium">DPIIT registered? *</Label>
                    <Select onValueChange={(value) => handleSelectChange('dpiitRegistered', value)} required>
                      <SelectTrigger className="mt-2">
                        <SelectValue placeholder="Select DPIIT registration status" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="yes">Yes</SelectItem>
                        <SelectItem value="no">No</SelectItem>
                        <SelectItem value="in-process">In Process</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="supportSeeking" className="text-base font-medium">Support seeking from CITIL *</Label>
                    <Textarea
                      id="supportSeeking"
                      name="supportSeeking"
                      value={formData.supportSeeking}
                      onChange={handleInputChange}
                      placeholder="Describe the specific support you're seeking from CITIL (mentorship, funding, technical support, market access, etc.)"
                      required
                      className="mt-2"
                    />
                  </div>

                  <div>
                    <Label htmlFor="fundingStatus" className="text-base font-medium">Funding status *</Label>
                    <Select onValueChange={(value) => handleSelectChange('fundingStatus', value)} required>
                      <SelectTrigger className="mt-2">
                        <SelectValue placeholder="Select funding status" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="bootstrapped">Bootstrapped</SelectItem>
                        <SelectItem value="pre-seed">Pre-Seed</SelectItem>
                        <SelectItem value="seed">Seed</SelectItem>
                        <SelectItem value="series-a">Series A</SelectItem>
                        <SelectItem value="series-b">Series B</SelectItem>
                        <SelectItem value="seeking-funding">Seeking Funding</SelectItem>
                        <SelectItem value="grant-funded">Grant Funded</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="otherComments" className="text-base font-medium">Other comments</Label>
                    <Textarea
                      id="otherComments"
                      name="otherComments"
                      value={formData.otherComments}
                      onChange={handleInputChange}
                      placeholder="Any additional information you'd like to share..."
                      className="mt-2"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-brand-purple hover:bg-opacity-90 text-white py-3 text-lg font-semibold" 
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Submitting Application...' : 'Submit Startup Application'}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default StartupIncubationPage;
