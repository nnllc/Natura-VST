Content.makeFrontInterface(1000, 600);

//website button

inline function onLogoButtonControl(component, value)
{
	Engine.openWebsite("https://newnationllc.com");
};

Content.getComponent("LogoButton").setControlCallback(onLogoButtonControl);

//sampler
const var Sampler1 = Synth.getSampler("Sampler1");
const var Sampler2 = Synth.getSampler("Sampler2");
const var Sampler3 = Synth.getSampler("Sampler3");
const var Sampler4 = Synth.getSampler("Sampler4");

//samplemaps
const var sampleMaps = Sampler.getSampleMapList();

//combobox note: cmbsamplemaps is name of combobox
const var Combobox1 = Content.getComponent("Combobox1");
Combobox1.set("items", sampleMaps.join("\n"));

const var Combobox2 = Content.getComponent("Combobox2");
Combobox2.set("items", sampleMaps.join("\n"));

const var Combobox3 = Content.getComponent("Combobox3");
Combobox3.set("items", sampleMaps.join("\n"));

const var Combobox4 = Content.getComponent("Combobox4");
Combobox4.set("items", sampleMaps.join("\n"));

//Note: Sampler is name of Sampler
inline function onCombobox1Control(component, value)
{
	Sampler1.loadSampleMap(sampleMaps[value-1]);
};

Content.getComponent("Combobox1").setControlCallback(onCombobox1Control);

inline function onCombobox2Control(component, value)
{
	Sampler2.loadSampleMap(sampleMaps[value-1]);
};

Content.getComponent("Combobox2").setControlCallback(onCombobox2Control);

inline function onCombobox3Control(component, value)
{
	Sampler3.loadSampleMap(sampleMaps[value-1]);
};

Content.getComponent("Combobox3").setControlCallback(onCombobox3Control);

inline function onCombobox4Control(component, value)
{
	Sampler4.loadSampleMap(sampleMaps[value-1]);
};

Content.getComponent("Combobox4").setControlCallback(onCombobox4Control);

//Noise FX

const var Sampler5 = Synth.getSampler("Sampler5");

inline function onNoiseButtonControl(component, value)
{
	if (value)
		Synth.addNoteOn(1, 00, 00, 0);
	else
		Synth.addNoteOff(1, 00, 0);
};
Content.getComponent("NoiseButton").setControlCallback(onNoiseButtonControl);

//Noise Combobox
const var Noisecmbox = Content.getComponent("Noisecmbox");
Noisecmbox.set("items", sampleMaps.join("\n"));

//Noise Function
inline function onNoisecmboxControl(component, value)
{
	Sampler5.loadSampleMap(sampleMaps[value-1]);
};

Content.getComponent("Noisecmbox").setControlCallback(onNoisecmboxControl);

//Custom Settings Popup
const var panel1 = Content.addPanel("panel1", 650, 35);

//const var hideShow = Content.addButton("hideShow");
const var hideShow = Content.getComponent("hideShow");

inline function onhideShowControl(number, value)
{
        panel1.showControl(value); 
}

hideShow.setControlCallback(onhideShowControl);

function onNoteOn()
{
	
}
 function onNoteOff()
{
	
}
 function onController()
{
	
}
 function onTimer()
{
	
}
 function onControl(number, value)
{
	
}
 