
import { Home, Briefcase, BarChart3, Users, Phone } from 'lucide-react'
import { NavBar } from "@/components/ui/tubelight-navbar"

const Navigation = () => {
  const navItems = [
    { name: 'Home', url: '#hero', icon: Home },
    { name: 'Services', url: '#services', icon: Briefcase },
    { name: 'Comparison', url: '#comparison', icon: BarChart3 },
    { name: 'Benefits', url: '#benefits', icon: Users },
    { name: 'Contact', url: '#contact', icon: Phone }
  ]

  return <NavBar items={navItems} />
}

export default Navigation
