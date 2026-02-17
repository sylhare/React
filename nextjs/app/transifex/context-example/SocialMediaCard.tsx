import React, { useState } from 'react';
import { ACTIONS, COMMON, CTA, MESSAGES } from './TranslatedText';
import { TrashIcon, HeartIcon, BookmarkIcon } from '../shared/icons';
import '../styles.css';

interface SocialMediaCardProps {
  username: string;
  content: string;
  likes: number;
}

/**
 * Social media card component demonstrating context-specific translations
 */
export function SocialMediaCard({
  username,
  content,
  likes,
}: SocialMediaCardProps) {
  const [isLiked, setIsLiked] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleDelete = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setShowDeleteConfirm(false);
    }, 1500);
  };

  return (
    <div className="social-card">
      {/* Header */}
      <div className="social-card-header">
        <div className="social-header-content">
          <div className="social-user-info">
            <div className="user-avatar">
              {username[0].toUpperCase()}
            </div>
            <div>
              {MESSAGES.welcome(username)}
              <p className="post-meta">
                {COMMON.post.asNoun()} • 2h ago
              </p>
            </div>
          </div>
          <button
            onClick={() => setShowDeleteConfirm(true)}
            className="delete-btn"
          >
            <TrashIcon className="icon" />
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="social-card-content">
        <p className="post-content">{content}</p>
      </div>

      {/* Actions */}
      <div className="social-card-actions">
        <div className="action-buttons">
          <button
            onClick={() => setIsLiked(!isLiked)}
            className={`social-btn-like ${isLiked ? 'active' : ''}`}
          >
            <HeartIcon className="icon" filled={isLiked} />
            {COMMON.like.asVerb()} ({likes + (isLiked ? 1 : 0)})
          </button>

          <button
            onClick={() => setIsSaved(!isSaved)}
            className={`social-btn-save ${isSaved ? 'active' : ''}`}
          >
            <BookmarkIcon className="icon" filled={isSaved} />
            {COMMON.save.favorite()}
          </button>
        </div>
      </div>

      {/* Delete Confirmation Modal */}
      {showDeleteConfirm && (
        <div className="delete-modal">
          <p className="delete-message">
            {MESSAGES.deleteConfirmation()}
          </p>
          {isLoading ? (
            <div className="loading-state">
              {MESSAGES.loading()}
            </div>
          ) : (
            <div className="modal-actions">
              <button
                onClick={handleDelete}
                className="btn-delete"
              >
                {ACTIONS.delete()}
              </button>
              <button
                onClick={() => setShowDeleteConfirm(false)}
                className="btn-cancel"
              >
                {ACTIONS.cancel()}
              </button>
            </div>
          )}
        </div>
      )}

      {/* Upgrade Prompt */}
      <div className="upgrade-prompt">
        <div className="upgrade-content">
          <p className="upgrade-text">
            Get more features with Pro
          </p>
          <button className="btn-upgrade">
            {CTA.upgradeToPro()}
          </button>
        </div>
      </div>

      {/* Action Buttons Showcase */}
      <div className="actions-showcase">
        <p className="showcase-label">
          Other actions:
        </p>
        <div className="showcase-buttons">
          <button className="btn-showcase-post">
            {COMMON.post.asVerb()}
          </button>
          <button className="btn-showcase-save">
            {COMMON.save.file()}
          </button>
        </div>
      </div>
    </div>
  );
}
