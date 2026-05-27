/**
 * Performance Audit System
 * Comprehensive auditing and optimization reporting system
 */

// Core auditor
export { PerformanceAuditor } from './PerformanceAuditor';

// Analyzers
export { BundleAnalyzer } from './analyzers/BundleAnalyzer';
export { MemoryAnalyzer, RenderAnalyzer } from './analyzers/MemoryAnalyzer';
export { DependencyAnalyzer, NetworkAnalyzer } from './analyzers/NetworkAnalyzer';
export { AssetAnalyzer, RuntimeAnalyzer } from './analyzers/RuntimeAnalyzer';

// Engine
export { RecommendationEngine } from './RecommendationEngine';

// Report
export { ReportGenerator } from './ReportGenerator';

// Types
export type {
    AnimationMetrics,
    // Asset
    AssetAnalysis,
    // Options
    AuditOptions,
    // Bundle
    BundleAnalysis,
    BundleChunk,
    BundleFile, CacheMetrics, ComparisonData, CPUMetrics,
    // Dependency
    DependencyAnalysis, DuplicateModule, ExecutiveSummary, FontInfo, FontMetrics, FormatOpportunity, ImageInfo, ImageMetrics,
    // Interfaces
    IPerformanceAnalyzer, LargeObject, LicenseIssue,
    // Memory
    MemoryAnalysis,
    MemoryLeak,
    // Network
    NetworkAnalysis,
    NetworkEndpoint, OutdatedDependency,
    // Report
    PerformanceAuditReport,
    // Metrics
    PerformanceMetric,
    // Recommendations
    Recommendation, RecommendationCategory, RedundantRequest,
    // Render
    RenderAnalysis, RerenderIssue,
    // Runtime
    RuntimeAnalysis,
    // Enums
    SeverityLevel, SlowComponent, TransitiveDependency, UnoptimizedAsset, Vulnerability
} from './types';

// Re-export everything from types for convenience
export * from './types';

/**
 * Quick start function
 */
export async function runAudit(
  projectRoot?: string,
  formats?: ('json' | 'html' | 'markdown')[]
) {
  const { PerformanceAuditor } = await import('./PerformanceAuditor');
  const auditor = new PerformanceAuditor(projectRoot);
  return auditor.auditAndReport(formats);
}
