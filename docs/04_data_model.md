# Reflex – Data Model Specification

## Overview

This document outlines the schema design for Reflex's core data storage. Reflex is a local-first application and uses SQLite for fast, persistent, file-based storage. The schema is optimized for journaling, behavior tracking, rule management, and user-level gamification.

All timestamps are stored in ISO 8601 format. All identifiers are UUID strings.

---

## Tables

### 1. journal_entries

Stores full information for each trade that is journaled by the user.

| Column             | Type      | Description |
|--------------------|-----------|-------------|
| id                 | TEXT      | Primary key (UUID) |
| date               | TEXT      | Trade date (ISO format) |
| start_time         | TEXT      | Entry timestamp (local time, formatted) |
| end_time           | TEXT      | Exit timestamp (local time, formatted) |
| market             | TEXT      | Market symbol (e.g., NQ, ES) |
| result             | TEXT      | Trade result: win, loss, breakeven, flipped |
| flipped            | INTEGER   | 1 = flipped trade, 0 = standard |
| rr_planned         | REAL      | Planned risk-reward |
| rr_realized        | REAL      | Realized risk-reward |
| entry_price        | REAL      | Entry price |
| stop_loss          | REAL      | Stop price |
| tp1                | REAL      | First target |
| tp2                | REAL      | Second target |
| final_exit_price   | REAL      | Exit price for final portion |
| size               | TEXT      | Position size description |
| confluences        | TEXT      | Setup confluences (long form) |
| management_notes   | TEXT      | Trade management decisions |
| takeaway           | TEXT      | One-line summary or lesson |
| grade              | TEXT      | A–F grade assigned by user |
| color_score        | TEXT      | green, yellow, red |
| screenshot_path    | TEXT      | Path to chart image (optional) |
| gpt_summary        | TEXT      | GPT-generated trade review |
| created_at         | TEXT      | Timestamp when entry was created |

---

### 2. daily_logs

Tracks daily discipline habits and no-trade days.

| Column           | Type    | Description |
|------------------|---------|-------------|
| id               | TEXT    | UUID |
| date             | TEXT    | Day (ISO format) |
| traded_today     | INTEGER | 1 = yes, 0 = no |
| journal_completed| INTEGER | 1 = yes, 0 = no |
| rules_followed   | INTEGER | 1 = yes, 0 = no |
| xp_earned        | INTEGER | XP from this day |
| notes            | TEXT    | Optional notes or mood log |

---

### 3. user_settings

Tracks local user preferences and configurations.

| Column             | Type    | Description |
|--------------------|---------|-------------|
| id                 | INTEGER | Always 1 row |
| mascot_visible     | INTEGER | 1 = yes, 0 = no |
| voice_enabled      | INTEGER | 1 = yes, 0 = no |
| difficulty_mode    | TEXT    | standard, strict, focus |
| theme              | TEXT    | light, dark |
| preferred_voice    | TEXT    | calm, energetic, robotic |
| streak_freeze_tokens | INTEGER | Usable streak savers |
| created_at         | TEXT    | First launch timestamp |

---

### 4. trading_rules

Tracks the user-defined rules for trade constraints.

| Column                | Type    | Description |
|------------------------|---------|-------------|
| id                     | TEXT    | UUID |
| max_trades_per_day     | INTEGER | Number |
| trading_start_time     | TEXT    | e.g., "09:30 AM" |
| trading_end_time       | TEXT    | e.g., "12:00 PM" |
| max_daily_loss         | REAL    | Maximum loss allowed |
| hard_lock_enabled      | INTEGER | 1 = yes, 0 = no |
| created_at             | TEXT    | When rule was defined |

---

### 5. xp_and_progress

Tracks long-term progression data.

| Column             | Type    | Description |
|--------------------|---------|-------------|
| id                 | INTEGER | Always 1 row |
| total_xp           | INTEGER | Lifetime XP total |
| current_streak     | INTEGER | Current active streak |
| longest_streak     | INTEGER | Longest ever streak |
| badges             | TEXT    | Comma-separated badge names |
| titles             | TEXT    | Comma-separated earned titles |
| mascot_skin        | TEXT    | Active mascot skin ID |

---

## Relationships

- `journal_entries.date` is linked to `daily_logs.date` (1:N)
- Only one `user_settings` row is maintained
- `xp_and_progress` is a singleton record for progress tracking

---

## Next Steps

- Build SQLite migration script or ORM model for each table
- Integrate data loading into Zustand store
- Add validation logic (e.g., grade must be A–F, result must match enum)

