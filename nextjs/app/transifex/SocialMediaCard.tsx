import React, { useState } from 'react';
import { ACTIONS, COMMON, CTA, MESSAGES } from './TranslatedText';
import './styles.css';

interface SocialMediaCardProps {
  username: string;
  content: string;
  likes: number;
}

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
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white font-semibold">
              {username[0].toUpperCase()}
            </div>
            <div>
              {MESSAGES.welcome(username)}
              <p className="text-xs text-gray-500 dark:text-gray-400">
                {COMMON.post.asNoun()} • 2h ago
              </p>
            </div>
          </div>
          <button
            onClick={() => setShowDeleteConfirm(true)}
            className="text-gray-400 hover:text-red-600 dark:hover:text-red-400"
          >
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="social-card-content">
        <p className="text-gray-800 dark:text-gray-200">{content}</p>
      </div>

      {/* Actions */}
      <div className="social-card-actions">
        <div className="flex items-center justify-between">
          <button
            onClick={() => setIsLiked(!isLiked)}
            className={`social-btn-like ${isLiked ? 'active' : ''}`}
          >
            <svg className="h-5 w-5" fill={isLiked ? 'currentColor' : 'none'} stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
            {COMMON.like.asVerb()} ({likes + (isLiked ? 1 : 0)})
          </button>

          <button
            onClick={() => setIsSaved(!isSaved)}
            className={`social-btn-save ${isSaved ? 'active' : ''}`}
          >
            <svg className="h-5 w-5" fill={isSaved ? 'currentColor' : 'none'} stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
            </svg>
            {COMMON.save.favorite()}
          </button>
        </div>
      </div>

      {/* Delete Confirmation Modal */}
      {showDeleteConfirm && (
        <div className="border-t border-gray-200 dark:border-gray-700 bg-red-50 dark:bg-red-900/10 p-4">
          <p className="text-sm text-red-900 dark:text-red-100 mb-3">
            {MESSAGES.deleteConfirmation()}
          </p>
          {isLoading ? (
            <div className="flex items-center justify-center py-2">
              {MESSAGES.loading()}
            </div>
          ) : (
            <div className="flex gap-2">
              <button
                onClick={handleDelete}
                className="flex-1 rounded-md bg-red-600 px-4 py-2 text-sm font-medium text-white hover:bg-red-700"
              >
                {ACTIONS.delete()}
              </button>
              <button
                onClick={() => setShowDeleteConfirm(false)}
                className="flex-1 rounded-md bg-gray-200 dark:bg-gray-700 px-4 py-2 text-sm font-medium hover:bg-gray-300 dark:hover:bg-gray-600"
              >
                {ACTIONS.cancel()}
              </button>
            </div>
          )}
        </div>
      )}

      {/* Upgrade Prompt */}
      <div className="border-t border-gray-200 dark:border-gray-700 bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 p-3">
        <div className="flex items-center justify-between">
          <p className="text-sm text-gray-700 dark:text-gray-300">
            Get more features with Pro
          </p>
          <button className="rounded-md bg-gradient-to-r from-purple-600 to-blue-600 px-4 py-1.5 text-sm font-medium text-white hover:from-purple-700 hover:to-blue-700">
            {CTA.upgradeToPro()}
          </button>
        </div>
      </div>

      {/* Action Buttons Showcase */}
      <div className="border-t border-gray-200 dark:border-gray-700 p-4 bg-gray-50 dark:bg-gray-900/50">
        <p className="text-xs text-gray-500 dark:text-gray-400 mb-2">
          Other actions:
        </p>
        <div className="flex gap-2">
          <button className="rounded bg-blue-600 px-3 py-1 text-xs text-white hover:bg-blue-700">
            {COMMON.post.asVerb()}
          </button>
          <button className="rounded bg-green-600 px-3 py-1 text-xs text-white hover:bg-green-700">
            {COMMON.save.file()}
          </button>
        </div>
      </div>
    </div>
  );
}
