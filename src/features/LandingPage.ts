import Package from "../Package.js";
import BaseFeature from "./BaseFeature.js";
import { Severity, Stage, VisualFeatureType } from "./FeatureTypes.js";

export default class LandingPage implements BaseFeature {
    public static featureName = "Landing Page"
    public static documentationLink = "https://learn.microsoft.com/en-us/power-bi/developer/visuals/landing-page"
    public static severity = Severity.Warning
    public static stage = Stage.PostBuild
    public static visualFeatureType = VisualFeatureType.NonSlicer | VisualFeatureType.Slicer
    public static errorMessage = `${this.featureName} - ${this.documentationLink}`

    static isSupported(packageInstance: Package) {
        return packageInstance.isCapabilityEnabled({ supportsLandingPage: true })
    }
} 